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
import { nftCategoriesApi } from "../api/methods";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Home = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);

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

    categoriesList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner list={list} />
        {/* <Collections /> */}
        <HotCollections />
        <TopSellers />
        <ShowAll categories={list} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
