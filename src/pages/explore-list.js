import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Explore from "../components/explore";
import Header from "../components/header";
import Footer from "../components/footer";
import { nftCategoryDetailApi } from "../api/methods";

const ExploreList = () => {
  const { slug } = useParams();
  const [categoryDetail, setCategoryDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
