import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import useQuery from "../hook/useQuery";
import Explore from "../components/explore";
import Header from "../components/header";
import Footer from "../components/footer";
import { nftCategoryDetailApi } from "../api/methods";
import { setCookiesByName } from "../utils/cookies";

const ExploreList = () => {
  const { cSlug } = useParams();
  const [categoryDetail, setCategoryDetail] = useState({});
  const [loading, setLoading] = useState(false);
  let query = useQuery();
  const fsz = query.get("fsz");

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    nftCategoryDetail(cSlug);
  }, []);

  const nftCategoryDetail = async (input) => {
    try {
      setLoading(true);
      let response = await nftCategoryDetailApi({ slug: input });
      setCategoryDetail(response.data.data.category);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header bgImage />
      <Explore categoryDetail={categoryDetail} slug={categoryDetail?.slug} />
      <Footer />
    </>
  );
};

export default ExploreList;
