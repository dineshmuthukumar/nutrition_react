import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../components/header";
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import { nftDetailApi } from "../api/methods";
import NFTLootBoughtDetails from "../components/nft-loot-bought-details";
import NFTLootBoughtMedia from "../components/nft-loot-bought-media";
import NFTSectionTitle from "../components/nft-section-title";
import NFTProperties from "../components/nft-properties";
import ChainAttributes from "../components/chain-attributes";
import NFTTags from "../components/nft-tags";
import LootNFTOwn from "../components/loot-nft-own";

const LootDetail = () => {
  const { slug } = useParams();
  const [nft, setNft] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    nftDetail(slug);
  }, [slug]);

  const nftDetail = async (slug) => {
    try {
      setLoader(true);
      let response = await nftDetailApi({ nft_slug: slug });
      setNft(response.data.data.nft);
      setLoader(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
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
                <NFTLootBoughtMedia nft={nft} />
              </div>
              <div className="col-12 col-lg-5">
                <NFTLootBoughtDetails nft={nft} />
              </div>
            </div>
          </div>
          <NFTSectionTitle title="NFT Details" />
          <div className="row mt-5">
            <div className="col-12 col-lg-6 order-lg-2 mb-4">
              <LootNFTOwn nft={nft}/>
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              {nft.properties && <NFTProperties properties={nft.properties} />}

              <div className="mt-5"></div>
              {nft.chain_attributes.length > 0 && (
                <ChainAttributes chains={nft.chain_attributes} />
              )}

              <div className="mt-5"></div>
              {nft.tag_names.length > 0 && <NFTTags tags={nft.tag_names} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LootDetail;
