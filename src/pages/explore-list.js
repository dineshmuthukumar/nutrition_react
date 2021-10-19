import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { nftListApi } from "../api/methods";
import Explore from "../components/explore";
import Header from "../components/header";
import toaster from "../utils/toaster";

const ExploreList = () => {
  const { slug } = useParams();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    nftList(page);
  }, []);

  const nftList = async (page) => {
    try {
      let response = await nftListApi({ slug, page });
      setList(response.data.data.nfts);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };
  return (
    <>
      <Header />
      <Explore list={list} />
    </>
  );
};

export default ExploreList;
