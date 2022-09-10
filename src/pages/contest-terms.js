import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import useQuery from "../hook/useQuery";
import ContestTermsAndConditions from "../components/contest-terms-and-conditions";

const Terms = () => {
  const query = useQuery();
  const hide = query.get("hide");
  return (
    <>
      {!hide && (
        <Header
          bgImage
          title="Contest Terms And Conditions | T&C | Jump.Trade"
          description="The Jump.trade NFT marketplace's terms and conditions are  in the interest of our community, creators, and our business."
        />
      )}
      <ContestTermsAndConditions />
      {!hide && <Footer />}
    </>
  );
};

export default Terms;
