import React, { useState, useEffect } from "react";
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
import { cmsPagetApi, homeContentApi } from "../api/base-methods";

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
import Cms from "../components/new/cms";

import Footer from "../components/footer";

const About = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const _ga = query.get("_ga");
  const [homeContent, setHomeContent] = useState({});
  const [list, setList] = useState([]);
  const match = useRouteMatch();
  const { id } = match.params;
  const [Data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  // const [favPage, setFavPage] = useState(1);
  // const [favList, setFavList] = useState([]);
  // const [favLoading, setFavLoading] = useState(false);
  // const [favHasNext, setFavHasNext] = useState(false);

  const homecontent = async () => {
    try {
      let response = await homeContentApi();
      //console.log(response);
      setHomeContent(response?.data?.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    ///categoriesList(1);
    // if (_ga) {
    //   history.replace(url);
    // }
    homecontent();
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
  // useEffect(() => {
  //   if (process.env.REACT_APP_MARKETING_SCRIPT === "enabled") {
  //     ReactPixel.init(process.env.REACT_APP_META_PIXEL_ID);
  //     ReactPixel.pageView();
  //   }
  // }, []);
  const getCustomPage = async () => {
    setLoading(true);
    try {
      const Abouts = await cmsPagetApi(id);
      setData(Abouts?.data?.responseData?.page[0]);
      setLoading(false);
      window.scrollTo(0, 0);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
    //console.log(Abouts, "Abouts");
  };

  useEffect(() => {
    getCustomPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getCustomPage();
    // eslint-disable
  }, [id]);

  return (
    <>
      <Header
        title="liven Science"
        description="Natural Medicine. Sign up now!"
        //image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      <main className="main single-product">
        <div className="page-content">
          <div className="container-fluid p-0">
            <div
              className="page-header pl-4 pr-4 cms-page-imge"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_PUBLIC_BASE_URL}${Data?.image})`,
              }}>
              <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">
                {/* Page */}
              </h1>
            </div>
            <div class="page-content mt-10 pt-10">
              {!loading ? <Cms /> : "Please wait Loading"}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default About;
