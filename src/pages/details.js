import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
import { artistApi } from "../api/base-methods";
import OwnerList from "../components/owner-list";
import Footer from "../components/footer/index";
import NFTOrderDetails from "../components/nft-order-details/index";
import AdditionalPerks from "../components/additional-perks/index";
import NFTPlayerStats from "../components/nft-player-stats";

const Details = () => {
  const { slug } = useParams();
  const [nft, setNft] = useState({});
  const [nftOwner, setNFTOwner] = useState([]);
  const [erc721, setErc721] = useState(false);
  const [loader, setLoader] = useState(true);
  const [ownerLoader, setOwnerLoader] = useState(true);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [transactionLoader, setTransactionLoader] = useState(false);
  const [transactionHasNext, setTransactionHasNext] = useState(false);
  const [putOnSalePop, setPutOnSalePop] = useState(false);
  const [ownerOrdersList, setOwnerOrdersList] = useState([]);
  const [ownerCount, setOwnerCount] = useState(0);
  const [isQuantityAvailable, setIsQuantityAvailable] = useState(null);
  const [page, setPage] = useState(1);
  const [artist, setArtist] = useState({});

  const { user } = useSelector((state) => state.user.data);
  const isOwner = _.has(nft, "owner_details");
  const availableQty = _.get(nft, "owner_details.available_quantity", 0);
  const location = useLocation();

  useEffect(() => {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;

    nftDetail(slug);
    nftOwners();
    nftTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOwner && availableQty && user?.kyc_status === "success") {
      if (location.hash === "#list-for-sale") {
        setPutOnSalePop(!putOnSalePop);
      }
    }
  }, [isOwner, availableQty]);

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
      nftTransaction();
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
      if (NFT.celebrity_slug) {
        artistDetail(NFT.celebrity_slug);
      }
      setLoader(false);
    } catch (err) {
      // setLoader(false);
      console.log(err);
      toaster(
        500,
        "The request could not be processed at this time. Please try again."
      );
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
      setTransactionLoader(true);
      let transactions = await nftTransactionHistory({
        nft_slug: slug,
        page: page,
      });
      setTransactionHistory(transactions.data.data.nfts);
      setTransactionHasNext(transactions.data.data.next_page);
      setTransactionLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const artistDetail = async (slug) => {
    try {
      let response = await artistApi(slug);
      console.log(response);
      setArtist(response.data.data.celebrity);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      {loader ? (
        <NFTLoader />
      ) : (
        <section className="detail-page-content">
          <div className="bid_section_wrapper">
            <div className="container-fluid">
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
          </div>
          <div className="property_section_wrapper">
            <div className="container-fluid">
              {isOwner && ownerOrdersList.length > 0 && (
                <>
                  <NFTSectionTitle title="ORDER DETAILS" />
                  <div className="row mt-5">
                    <NFTOrderDetails nft={nft} orderList={ownerOrdersList} />
                  </div>
                </>
              )}

              <NFTSectionTitle title="NFT DETAILS" />
              <div className="row mt-5">
                <div className="col-12 col-lg-6 order-lg-2 order-2 mb-4">
                  {(() => {
                    if (erc721) {
                      return (
                        nftOwner.length > 0 && (
                          <BidHistory
                            nft={nft}
                            isOwner={isOwner}
                            nftOwner={nftOwner[0]}
                            // Transaction History
                            transactionHistory={transactionHistory}
                            transactionLoader={transactionLoader}
                            transactionHasNext={transactionHasNext}
                          />
                        )
                      );
                    } else {
                      return (
                        nftOwner.length > 0 && (
                          <OwnerList
                            isLoading={ownerLoader}
                            nft={nft}
                            nftOwners={nftOwner}
                            totalCount={ownerCount}
                            // Transaction History
                            transactionHistory={transactionHistory}
                            transactionLoader={transactionLoader}
                            transactionHasNext={transactionHasNext}
                          />
                        )
                      );
                    }
                  })()}
                </div>
                <div className="col-12 col-lg-6 order-lg-1 order-1">
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

                  {nft?.core_statistics && nft?.statistics.length > 0 && (
                    <>
                      <div className="mt-5"></div>
                      <NFTPlayerStats
                        stats={nft?.statistics}
                        core={nft?.core_statistics}
                      />
                    </>
                  )}

                  {nft?.tag_names?.length > 0 && (
                    <>
                      <div className="mt-5"></div>
                      <NFTTags tags={nft.tag_names} />
                    </>
                  )}

                  {/* {nft?.comic?.length > 0 && (
                    <>
                      <div className="mt-5"></div>
                      <AdditionalPerks comics={nft.comic} />
                    </>
                  )} */}
                </div>
              </div>
              {artist?.show_artist && (
                <>
                  <NFTSectionTitle title={artist?.title} />
                  <div className="mt-5">
                    <NFTArtist id={nft.celebrity_id} artist={artist} />
                  </div>
                  <br />
                  <br />
                </>
              )}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Details;
