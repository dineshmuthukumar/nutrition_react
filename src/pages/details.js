import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";

import {
  nftDetailApi,
  nftOwnerApi,
  nftTransactionHistory,
} from "../api/methods";
import BidHistory from "../components/bid-history";
import ChainAttributes from "../components/chain-attributes";
import Header from "../components/header";
import NFTArtist from "../components/nft-artist";
import NFTBaseDetails from "../components/nft-basic-details";
import NFTMedia from "../components/nft-media";
import NFTProperties from "../components/nft-properties";
import NFTSectionTitle from "../components/nft-section-title";
import NFTTags from "../components/nft-tags";
import toaster from "../utils/toaster";
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import { listForSaleDetail, ownerDetails } from "../api/actioncable-methods";
import OwnerList from "../components/owner-list";
import Footer from "../components/footer/index";
import NFTOrderDetails from "../components/nft-order-details/index";

const Details = () => {
  const { slug } = useParams();
  const [nft, setNft] = useState({});
  const [nftOwner, setNFTOwner] = useState([]);
  const [erc721, setErc721] = useState(false);
  const [loader, setLoader] = useState(true);
  const [ownerLoader, setOwnerLoader] = useState(true);
  const [putOnSalePop, setPutOnSalePop] = useState(false);
  const [ownerOrdersList, setOwnerOrdersList] = useState([]);
  const [ownerCount, setOwnerCount] = useState(0);
  const [isQuantityAvailable, setIsQuantityAvailable] = useState(null);
  const [page, setPage] = useState(1);

  const { user } = useSelector((state) => state.user.data);
  const isOwner = _.has(nft, "owner_details");

  useEffect(() => {
    nftDetail(slug);
    nftOwners();
    // nftTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user && isOwner) {
      listForSaleDetail(slug, user.slug, (data) => {
        setIsQuantityAvailable(data.available);
        setOwnerOrdersList((ownerOrdersList) => [
          data.order,
          ...ownerOrdersList,
        ]);
      });
    }
  }, [isOwner]);

  useEffect(() => {
    ownerDetails(slug, (data) => {
      // console.log(data);
      // if (data?.owners?.length > 0) {
      //   let owners = [...nftOwner];
      //   const latest = data.owners?.[0];
      //   const index = owners.findIndex((obj) => obj.slug === latest.slug);
      //   console.log(index, "index");
      //   if (index !== -1) {
      //     let owner = {
      //       ...owners[index],
      //       sold_quantity: latest.sold_quantity,
      //     };
      //     owners[index] = owner;
      //     setNFTOwner(owners);
      //   } else {
      //     setNFTOwner((nftOwner) => [latest, ...nftOwner]);
      //   }
      // }
      nftOwners();
    });
  }, []);

  const nftDetail = async (slug) => {
    try {
      setLoader(true);
      let response = await nftDetailApi({
        nft_slug: slug,
      });
      const NFT = response.data.data.nft;
      setNft(NFT);
      setErc721(NFT.nft_type === "erc721");
      if (NFT.owner_details) {
        setIsQuantityAvailable(NFT.owner_details.available_quantity);
        setOwnerOrdersList(NFT.owner_details.orders);
      }
      setLoader(false);
    } catch (err) {
      // setLoader(false);
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };

  const nftOwners = async () => {
    try {
      setOwnerLoader(true);
      let owners = await nftOwnerApi({ nft_slug: slug, page: 1 });
      setNFTOwner(owners.data.data.owners);
      setOwnerCount(owners.data.data.total_count);
      setOwnerLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nftTransaction = async () => {
    try {
      let transactions = await nftTransactionHistory({
        nft_slug: slug,
        page: page,
      });
      console.log(transactions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      {loader ? (
        <NFTLoader />
      ) : (
        <div className="container-fluid">
          <div className="bid_section_wrapper">
            <div className="row fit-to-height">
              <div className="col-12 col-lg-7">
                <NFTMedia
                  nft={nft}
                  title={nft?.name}
                  slug={nft?.slug}
                  isFav={nft?.is_user_fav}
                />
              </div>
              <div className="col-12 col-lg-5">
                <NFTBaseDetails
                  nft={nft}
                  putOnSalePop={putOnSalePop}
                  setPutOnSalePop={setPutOnSalePop}
                  isQuantityAvailable={isQuantityAvailable}
                  ownerOrdersList={ownerOrdersList}
                  owners={nftOwner}
                />
              </div>
            </div>
          </div>

          {isOwner && ownerOrdersList.length > 0 && (
            <>
              <NFTSectionTitle title="Order Details" />
              <div className="row mt-5">
                <NFTOrderDetails nft={nft} orderList={ownerOrdersList} />
              </div>
            </>
          )}

          <NFTSectionTitle title="NFT Details" />
          <div className="row mt-5">
            <div className="col-12 col-lg-6 order-lg-2 mb-4">
              {(() => {
                if (erc721) {
                  return (
                    nftOwner.length > 0 && (
                      <BidHistory
                        nft={nft}
                        isOwner={isOwner}
                        nftOwner={nftOwner[0]}
                      />
                    )
                  );
                } else {
                  return (
                    nftOwner.length > 0 && (
                      <OwnerList
                        nft={nft}
                        nftOwners={nftOwner}
                        totalCount={ownerCount}
                      />
                    )
                  );
                }
              })()}
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              {(() => {
                if (nft.properties && typeof nft.properties === "string") {
                  let propertiesData = JSON.parse(nft.properties);
                  if (
                    propertiesData &&
                    Object.keys(propertiesData).length > 0
                  ) {
                    return <NFTProperties properties={propertiesData} />;
                  }
                } else {
                  if (
                    nft.properties &&
                    Object.keys(nft.properties).length > 0
                  ) {
                    return <NFTProperties properties={nft.properties} />;
                  }
                }
              })()}

              <div className="mt-5"></div>
              <ChainAttributes chains={nft.chain_attributes} />
              <div className="mt-5"></div>
              <NFTTags tags={nft.tag_names} />
            </div>
          </div>
          <NFTSectionTitle title="Artist" />
          <div className="mt-5">
            <NFTArtist id={nft.celebrity_id} />
          </div>
          <br />
          <br />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Details;
