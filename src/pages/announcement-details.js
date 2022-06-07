import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AnnounceDetail from "../components/blogs/announcedetails";

const AnnouncementDetails = () => {
  return (
    <>
      <Header bgImage title="Blogs | Jump.Trade" />
      <AnnounceDetail />
      <Footer />
    </>
  );
};

export default AnnouncementDetails;
