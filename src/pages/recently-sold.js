import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import RecentlySoldList from "../components/recently-sold-list/index";

const RecentlySold = () => {
  return (
    <>
      <Header />
      <RecentlySoldList />
      <Footer />
    </>
  );
};

export default RecentlySold;
