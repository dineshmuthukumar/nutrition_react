import React, { useEffect } from "react";

import useQuery from "../hook/useQuery";
import Header from "../components/header";
import ExploreAllNFT from "../components/explore/explore-all-nft";
import Footer from "../components/footer";
import { setCookiesByName } from "../utils/cookies";

const ExploreAll = () => {
  let query = useQuery();
  const fsz = query.get("fsz");

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }
  }, []);

  return (
    <>
      <Header
        bgImage
        title="Buy Cricket NFTs | Sports NFT Marketplace | Jump.trade"
        description="Get your hands on some of the most prized and highly collectible cricket NFTs at Jump.trade. Buy, sell, & collect cricket & other sports NFTs."
      />
      <ExploreAllNFT />
      <Footer />
    </>
  );
};

export default ExploreAll;
