import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AppHelmet from "../components/helmet";
import ContestComponent from "../components/contest";

const Contest = () => {
  return (
    <>
      <AppHelmet
        title={"Jump.trade Contest"}
        description={
          "Bird's eye view of all the latest updates to the Jump.trade Marketplace and the MCL Game"
        }
      />
      <Header bgImage />
      <ContestComponent />
      <Footer />
    </>
  );
};

export default Contest;
