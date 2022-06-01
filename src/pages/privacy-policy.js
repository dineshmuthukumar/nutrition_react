import React from "react";
import Header from "../components/header";
import PrivacyComponent from "../components/privacy-policy";
import Footer from "../components/footer";
import useQuery from "../hook/useQuery";

const PrivacyPolicy = () => {
  let query = useQuery();
  const hide = query.get("hide");
  return (
    <>
      {!hide && <Header
        bgImage
        title="Privacy Policy | Jump.Trade"
        description="The Jump.trade NFT marketplace is committed to protect the privacy of all user information."
      />}
      <PrivacyComponent />
      {!hide && <Footer />}
    </>
  );
};

export default PrivacyPolicy;
