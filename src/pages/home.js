import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Collections from "../components/collections";
import HotCollections from "../components/hot-collections";
import TopSellers from "../components/top-sellers";
import ShowAll from "../components/show-all";
import { useHistory, useRouteMatch } from "react-router";

import {
  setCookiesByName,
  removeCookiesByName,
  setCookies,
} from "../utils/cookies";
import { user_load_by_token_thunk } from "../redux/thunk/user_thunk";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Home = () => {
  const { url } = useRouteMatch();

  const dispatch = useDispatch();

  const history = useHistory();

  let query = useQuery();

  const fsz = query.get("fsz");

  const token = query.get("token");

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    } else {
      removeCookiesByName("source");
    }

    if (token) {
      setCookies(token);

      history.replace(url);
      dispatch(user_load_by_token_thunk(token));
    } else {
      removeCookiesByName("source");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner />
        {/* <Collections /> */}
        <HotCollections />
        <TopSellers />
        <ShowAll />
      </main>
      <Footer />
    </>
  );
};

export default Home;
