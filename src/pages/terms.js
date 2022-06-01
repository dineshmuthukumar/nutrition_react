import React from "react";
import Header from "../components/header";
import TermsAndConditions from "../components/terms-and-conditions";
import Footer from "../components/footer";
import useQuery from "../hook/useQuery";

const Terms = () => {
  const query = useQuery();
  const hide = query.get("hide");
  return (
    <>
      {!hide && <Header
        bgImage
        title="Terms And Conditions | T&C | Jump.Trade"
        description="The Jump.trade NFT marketplace's terms and conditions are  in the interest of our community, creators, and our business."
      />}
      <TermsAndConditions />
      {!hide && <Footer />}
    </>
  );
};

export default Terms;
