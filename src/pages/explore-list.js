import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import Explore from "../components/explore";
import Header from "../components/header";
import { nftCategoryListApi } from "../api/methods";

const ExploreList = () => {
  const { slug } = useParams();
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    nftList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nftList = async (page) => {
    try {
      setLoading(true);
      let response = await nftCategoryListApi({ slug, page });
      setList(response.data.data.nfts);
      setTotalRecords(response.data.data.total_count);
      response.data.data.total_count > 10
        ? setHasMore(true)
        : setHasMore(false);
      setLoading(false);
      setPage((page) => page + 1);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const fetchMore = async () => {
    try {
      if (list.length >= totalRecords) {
        setHasMore(false);
        return;
      }
      setPage((page) => page + 1);
      setLoadingMore(true);
      let response = await nftCategoryListApi({ slug, page });
      setList([...list, ...response.data.data.nfts]);
      setTotalRecords(response.data.data.total_count);
      setLoadingMore(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <Explore
        list={list}
        loading={loading}
        loadingMore={loadingMore}
        handleClick={fetchMore}
        hasMore={hasMore}
      />
    </>
  );
};

export default ExploreList;
