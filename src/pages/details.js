import React from "react";
import BidHistory from "../components/bid-history";
import ChainAttributes from "../components/chain-attributes";
import Header from "../components/header";
import NFTBaseDetails from "../components/nft-basic-details";
import NFTMedia from "../components/nft-media";
import NFTProperties from "../components/nft-properties";
import NFTTags from "../components/nft-tags";
import NFTSummary from "./../components/nft-summary";

const Details = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-md-7 align-self-center">
            <NFTMedia />
          </div>
          <div className="col-12 col-md-5">
            <NFTBaseDetails />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <NFTSummary />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <NFTProperties />
            <div className="mt-4"></div>
            <ChainAttributes />
            <div className="mt-4"></div>
            <NFTTags />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="col-6">
            <BidHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
