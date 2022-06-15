import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AnnouncementDetail from "../components/blogs/announcement-list";

const AnnouncementList = () => {
  return (
    <>
      <Header
        bgImage
        title="NFT Marketplace | Cricket NFT Marketplace | Buy & Sell Cricket NFTs "
        description="Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!"
      />
      <AnnouncementDetail />
      <Footer />
    </>
  );
};

export default AnnouncementList;
