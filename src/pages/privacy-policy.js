import React from "react";
import Header from "../components/header";
import PrivacyComponent from "../components/privacy-policy";
import Footer from "../components/footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header
        bgImage
        title="Privacy Policy | Jump.Trade"
        description="The Jump.trade NFT marketplace is committed to protect the privacy of all user information."
      />
      <PrivacyComponent />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
