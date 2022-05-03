import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import LiveAuctions from "../components/live-auctions";
import HotCollections from "../components/hot-collections";
import TopBuyers from "../components/top-buyers";
import TopSellers from "../components/top-sellers";
import RecentlySoldNFT from "../components/recently-sold-nft";
import ShowAll from "../components/show-all";
import { useHistory, useRouteMatch } from "react-router";

import {
  setCookiesByName,
  removeCookiesByName,
  setCookies,
} from "../utils/cookies";
import { user_load_by_token_thunk } from "../redux/thunk/user_thunk";
import { nftCategoriesApi, userFavedNFTOrders } from "../api/methods";
import useQuery from "../hook/useQuery";
import FavouriteNFTs from "../components/favourite-NFTs";
import HeroBanner from "../components/hero-banner";
import NewDropSection from "../components/new-drop-section";
import CollectionList from "../components/collection-list";

const Home = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const { user } = useSelector((state) => state.user.data);

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  const [favPage, setFavPage] = useState(1);
  const [favList, setFavList] = useState([]);
  const [favLoading, setFavLoading] = useState(false);
  const [favHasNext, setFavHasNext] = useState(false);

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
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    if (token) {
      setCookies(token);

      history.replace(url);
      dispatch(user_load_by_token_thunk(token));
    }

    categoriesList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      getUserFavedNFTOrders();
    }
  }, [user]);

  const getUserFavedNFTOrders = async () => {
    try {
      setFavLoading(true);
      const result = await userFavedNFTOrders(favPage);
      setFavList(result.data.data.orders);
      setFavLoading(false);
    } catch (error) {
      console.log(error);
      setFavLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* <Banner list={list} /> */}
        {/* <HotCollections /> */}

        {/* <RecentlySoldNFT /> */}
        {/* <TopBuyers /> */}
        {/* <TopSellers /> */}
        <HeroBanner />
        <NewDropSection />
        <CollectionList />
        <LiveAuctions />
        {favList.length > 0 && (
          <FavouriteNFTs list={favList} loading={favLoading} />
        )}
        <ShowAll categories={list} query={query} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
