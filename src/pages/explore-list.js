import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import useQuery from "../hook/useQuery";
import Explore from "../components/explore";
import Header from "../components/header";
import Footer from "../components/footer";
import { nftCategoryDetailApi } from "../api/methods";
import { setCookiesByName } from "../utils/cookies";

const ExploreList = () => {
  const { slug } = useParams();
  const [categoryDetail, setCategoryDetail] = useState({});
  const [loading, setLoading] = useState(false);
  let query = useQuery();
  const fsz = query.get("fsz");

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    nftCategoryDetail(slug);
  }, []);

  const nftCategoryDetail = async (slug) => {
    try {
      setLoading(true);
      let response = await nftCategoryDetailApi({ slug });
      setCategoryDetail(response.data.data.category);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Explore categoryDetail={categoryDetail} />
      <Footer />
    </>
  );
};

export default ExploreList;
