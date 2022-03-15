import React, { useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import LiveAuctions from "../components/live-auctions";
import HotCollections from "../components/hot-collections";
import TopBuyers from "../components/top-buyers";
import TopSellers from "../components/top-sellers";
// import RecentlySoldNFT from "../components/recently-sold-nft";
import ShowAll from "../components/show-all";
import useQuery from "../hook/useQuery";

import { nftCategoriesApi } from "../api/methods";

const Home = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  let query = useQuery();

  const categoriesList = async (page) => {
    try {
      setLoading(true);
      let response = await nftCategoriesApi({ page });
      setList([...list, ...response.data.data.categories]);
      setHasNext(response.data.data.next_page);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    categoriesList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner list={list} />
        <HotCollections />
        <LiveAuctions />
        {/* <RecentlySoldNFT /> */}
        <TopBuyers />
        <TopSellers />
        <ShowAll categories={list} query={query} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
