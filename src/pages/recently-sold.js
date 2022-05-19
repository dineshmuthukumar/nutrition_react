import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import RecentlySoldList from "../components/recently-sold-list/index";

const RecentlySold = () => {
  return (
    <>
      <Header
        bgImage
        title="Recently Sold NFTs | Jump.Trade"
        description="Take a look at the cricketNFTs that got sold recently on the jump.trade NFT marketplace. We know you missed it! Go buy the ones that are live for sale."
      />
      <RecentlySoldList />
      <Footer />
    </>
  );
};

export default RecentlySold;
