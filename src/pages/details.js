import React from "react";
import BidAuction from "../components/bid-auction";
import BidAuctionEnd from "../components/bid-auction-end";
import BidHistory from "../components/bid-history";
import BidWinner from "../components/bid-winner";
import ChainAttributes from "../components/chain-attributes";
import Header from "../components/header";
import NFTArtist from "../components/nft-artist";
import NFTBaseDetails from "../components/nft-basic-details";
import NFTMedia from "../components/nft-media";
import NFTMore from "../components/nft-more";
import NFTProperties from "../components/nft-properties";
import NFTTags from "../components/nft-tags";
import NFTSummary from "./../components/nft-summary";

const Details = () => {
  const data = {
    soldFor: 2000.99,
    soldOn: "Sep 16, 21 11:11pm",
    lastBid: 1976.00,
    lastBidDate: "Sep 16, 21 11:09pm",
  }
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 col-lg-7 align-self-center">
            <NFTMedia />
          </div>
          <div className="col-12 col-lg-5">
            <NFTBaseDetails />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <NFTSummary />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-6 order-lg-2">
            <BidHistory />
            {/* <BidAuction /> */}
            {/* <BidAuctionEnd count="1000/1000"/> */}
            {/* <BidWinner data={data}/> */}
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <NFTProperties />
            <div className="mt-4"></div>
            <ChainAttributes />
            <div className="mt-4"></div>
            <NFTTags />
          </div>
        </div>
        <div className="mt-5">
          <NFTArtist />
        </div>
        <div className="mt-5">
          <NFTMore />
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Details;
