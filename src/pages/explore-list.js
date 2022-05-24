import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import useQuery from "../hook/useQuery";
import Explore from "../components/explore";
import Header from "../components/header";
import Footer from "../components/footer";
import { nftCategoryDetailApi } from "../api/methods";
import { setCookiesByName } from "../utils/cookies";

const ExploreList = () => {
  const { cSlug, category } = useParams();
  const [categoryDetail, setCategoryDetail] = useState({});
  // const [loading, setLoading] = useState(false);
  let query = useQuery();
  const fsz = query.get("fsz");

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    nftCategoryDetail(cSlug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nftCategoryDetail = async (input) => {
    try {
      // setLoading(true);
      let response = await nftCategoryDetailApi({ slug: input });
      setCategoryDetail(response.data.data.category);
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header
        bgImage
        title={
          category === "cricket-player-nfts"
            ? "Meta Cricket League Players | Jump.Trade"
            : "Meta Cricket League Signed Bat | Jump.Trade"
        }
        description={
          category === "cricket-player-nfts"
            ? "Explore the stunning collection of Meta Cricket League player NFTs here. Buy your favourite players and gear up to play in the cricket metaverse."
            : "We bring you the Meta Cricket League Signed bat NFT collections. Find out signed bats of legendary players here. Buy them and power up your game in the cricket metaverse."
        }
      />
      <Explore categoryDetail={categoryDetail} slug={categoryDetail?.slug} />
      <Footer />
    </>
  );
};

export default ExploreList;
