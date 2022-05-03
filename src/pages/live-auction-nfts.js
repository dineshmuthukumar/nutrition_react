import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LiveAuctionsList from "../components/live-auction-list";

const LiveAuctionsNFTs = () => {
  return (
    <>
      <Header bgImage />
      <LiveAuctionsList />
      <Footer />
    </>
  );
};

export default LiveAuctionsNFTs;
