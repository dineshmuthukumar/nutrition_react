import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactPixel from "react-facebook-pixel";
///import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

//import Banner from "../components/banner";
// import LiveAuctions from "../components/live-auctions";
// import Trending from "../components/trending";
// //import HotCollections from "../components/hot-collections";
//import TopBuyers from "../components/top-buyers";
//import TopSellers from "../components/top-sellers";
// import RecentlySoldNFT from "../components/recently-sold-nft";
// import ShowAll from "../components/show-all";
import { useHistory, useRouteMatch } from "react-router";

import { setCookiesByName, setCookies } from "../utils/cookies";
import { user_load_by_token_thunk } from "../redux/thunk/user_thunk";
import { nftCategoriesApi } from "../api/methods";
import useQuery from "../hook/useQuery";
//import FavouriteNFTs from "../components/favourite-NFTs";
// import HeroBanner from "../components/hero-banner";
// //import NewDropSection from "../components/new-drop-section";
// // import CollectionList from "../components/collection-list";
// import TrailerVideo from "../components/trailer-video";
// import MclGameLaunchTimer from "../components/mcl-game-launch-timer";
// import MclGameLaunchOne from "../components/mcl-game-launch-one";
// import MclGameLaunchTwo from "../components/mcl-game-launch-two";
// import LeaderBoard from "../components/leader-board";
// import MclCompletedTournaments from "../components/mcl-completed-tournaments";
// import MclTournaments from "../components/mcl-tournaments";
// import MclGameButton from "../components/mcl-game-button";

import Header from "../components/header";
import Aboutus from "../components/new/about-us";

import Footer from "../components/footer";

// Import Swiper styles

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/swiper-bundle.css";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";
// install Swiper modules

import "./style.scss";
import FeatureProduct from "../components/new/feature-product";
import { homeContentApi } from "../api/base-methods";

const Swiperpage = () => {
  const swiperRef = useRef();
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const _ga = query.get("_ga");

  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(0);
  const [homeContent, setHomeContent] = useState({});
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

    ///categoriesList(1);
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

  // Meta Pixel Code
  useEffect(() => {
    if (process.env.REACT_APP_MARKETING_SCRIPT === "enabled") {
      ReactPixel.init(process.env.REACT_APP_META_PIXEL_ID);
      ReactPixel.pageView();
    }
  }, []);

  const handleNavigation = useCallback((direction = "") => {
    setUpdate(Math.random());
    console.log(direction, "direction");
    //if (!direction || !swiperRef.current) return;
    if (direction === "next") swiperRef.current.swiper.slideNext();
    else swiperRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    setUpdate(Math.random());
  }, [swiperRef?.current?.swiper]);

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

    /// categoriesList(1);
    homecontent();
    // SubcategoryList();
    // getCategoryList();

    if (_ga) {
      history.replace(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const homecontent = async () => {
    try {
      let response = await homeContentApi();
      //console.log(response);
      setHomeContent(response?.data?.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        // loop={true}
        // loopFillGroupWithBlank={true}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <button
        className={``}
        onClick={() => handleNavigation("prev")}
        disabled={swiperRef?.current?.swiper?.isBeginning}
      >
        <img
          src="https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png"
          width="40"
          height="40"
          alt="Arrow"
        />
      </button>
      <button
        className={``}
        onClick={() => handleNavigation("next")}
        disabled={swiperRef?.current?.swiper?.isEnd}
      >
        <img
          src="https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/front-arrow.png"
          width="40"
          height="40"
          alt="Arrow"
        />
      </button> */}
      <FeatureProduct featureProductsContent={homeContent?.featureProducts} />
    </>
  );
};

export default Swiperpage;
