import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LiveAuctionsList from "../components/live-auction-list";

const LiveAuctionsNFTs = () => {
  return (
    <>
      <Header />
      <LiveAuctionsList />
      <Footer />
    </>
  );
};

export default LiveAuctionsNFTs;
