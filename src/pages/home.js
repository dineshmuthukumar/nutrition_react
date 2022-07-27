import React, { useState, useEffect } from "react";
///import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/header";
import Footer from "../components/footer";
//import Banner from "../components/banner";
import LiveAuctions from "../components/live-auctions";
import Trending from "../components/trending";
//import HotCollections from "../components/hot-collections";
//import TopBuyers from "../components/top-buyers";
//import TopSellers from "../components/top-sellers";
import RecentlySoldNFT from "../components/recently-sold-nft";
import ShowAll from "../components/show-all";
import { useHistory, useRouteMatch } from "react-router";

import { setCookiesByName, setCookies } from "../utils/cookies";
import { user_load_by_token_thunk } from "../redux/thunk/user_thunk";
import { nftCategoriesApi } from "../api/methods";
import useQuery from "../hook/useQuery";
//import FavouriteNFTs from "../components/favourite-NFTs";
import HeroBanner from "../components/hero-banner";
//import NewDropSection from "../components/new-drop-section";
// import CollectionList from "../components/collection-list";
import TrailerVideo from "../components/trailer-video";
import MclGameLaunchTimer from "../components/mcl-game-launch-timer";
import MclGameLaunchOne from "../components/mcl-game-launch-one";
import MclGameLaunchTwo from "../components/mcl-game-launch-two";
import LeaderBoard from "../components/leader-board";
import MclCompletedTournaments from "../components/mcl-completed-tournaments";
import MclTournaments from "../components/mcl-tournaments";
import MclGameButton from "../components/mcl-game-button";

const Home = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const _ga = query.get("_ga");
  // const { user } = useSelector((state) => state.user.data);

  const [list, setList] = useState([]);

  // const [favPage, setFavPage] = useState(1);
  // const [favList, setFavList] = useState([]);
  // const [favLoading, setFavLoading] = useState(false);
  // const [favHasNext, setFavHasNext] = useState(false);

  const categoriesList = async (page) => {
    try {
      let response = await nftCategoriesApi({ page });
      setList([...list, ...response.data.data.categories]);
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

    categoriesList(1);
    if (_ga) {
      history.replace(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     getUserFavedNFTOrders();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  // const getUserFavedNFTOrders = async () => {
  //   try {
  //     setFavLoading(true);
  //     const result = await userFavedNFTOrders(favPage);
  //     setFavList(result.data.data.orders);
  //     setFavLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setFavLoading(false);
  //   }
  // };

  return (
    <>
      <Header
        title="Most Trusted NFT Marketplace To Trade Cricket NFTs"
        description="Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!"
        image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      <main>
        {/* <Banner list={list} /> */}
        {/* <HotCollections /> */}
        {/* <TopBuyers /> */}
        {/* <TopSellers /> */}
        <HeroBanner />
        {/* <LeaderBoard /> */}
        {/* <NewDropSection /> */}
        {/* <TrailerVideo /> */}
        <MclGameLaunchTimer />
        {/* <MclGameLaunchOne /> */}
        {/* <MclGameLaunchTwo /> */}
        {/* <CollectionList /> */}

        {/* design */}
        {/* <MclTournaments />
        <MclCompletedTournaments />
        <MclGameButton /> */}

        <Trending />
        <LiveAuctions />
        <RecentlySoldNFT />
        {/* {favList.length > 0 && (
          <FavouriteNFTs list={favList} loading={favLoading} />
        )} */}
        <ShowAll categories={list} query={query} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
