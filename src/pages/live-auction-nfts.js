import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LiveAuctionsList from "../components/live-auction-list";

const LiveAuctionsNFTs = () => {
  return (
    <>
      <Header
        bgImage
        title="Live Auction |Jump.Trade"
        description="Find the most-desirable cricketNFTs on jump.trade marketplace that are live on auction here. Go make your bid now to own them!"
      />
      <LiveAuctionsList />
      <Footer />
    </>
  );
};

export default LiveAuctionsNFTs;
