import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ShowAll from "../components/show-all";
import ExploreSearch from "../components/explore-search";
import ExploreNFTCardCarousel from "../components/explore-nft-card-carousel";
import cardImage from "../images/drops/nft_2.png";
const ExploreNft = () => {
  return (
    <>
      <Header />
      <main>
        <ExploreSearch />
        <ExploreNFTCardCarousel image={cardImage} />
        <ShowAll />
      </main>
      <Footer />
    </>
  );
};

export default ExploreNft;
