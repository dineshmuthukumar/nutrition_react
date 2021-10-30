import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../components/header";
import { NFTLoader } from "../components/nft-basic-details/content-loader";
import { nftDetailApi } from "../api/methods";
import NFTLootBoughtDetails from "../components/nft-loot-bought-details";
import NFTLootBoughtMedia from "../components/nft-loot-bought-media";

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
        </div>
      )}
    </>
  );
};

export default LootDetail;
