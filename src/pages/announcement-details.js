import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AnnounceDetail from "../components/blogs/announcedetails";

const AnnouncementDetails = () => {
  return (
    <>
      <Header
        bgImage
        title="NFT Marketplace | Cricket NFT Marketplace | Buy & Sell Cricket NFTs "
      />
      <AnnounceDetail />
      <Footer />
    </>
  );
};

export default AnnouncementDetails;
