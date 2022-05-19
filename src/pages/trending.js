import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import TrendingList from "../components/trending-list";

const TrendingNFTs = () => {
  return (
    <>
      <Header
        bgImage
        title="Trending NFTs | Jump.Trade"
        description="Make your bid on the trending cricketNFTs on the jump.trade NFT marketplace and own these supreme NFTs now!"
      />
      <TrendingList />
      <Footer />
    </>
  );
};

export default TrendingNFTs;
