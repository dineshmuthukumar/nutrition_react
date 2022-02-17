import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { useSelector, connect, useDispatch } from "react-redux";

import NFTCounter from "./components/nft-counter";
import { change_lang_action } from "./redux/actions/lang_action";
import { setLanguage } from "react-multi-lang";
import { getCookies } from "./utils/cookies";
import { getServerTimeApi } from "./api/base-methods";
import {
  user_load_by_token_thunk,
  user_logout_thunk,
  market_live_thunk,
} from "./redux/thunk/user_thunk";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const Explore = lazy(() => import("./pages/explore-list"));
const Details = lazy(() => import("./pages/details"));
const OrderDetails = lazy(() => import("./pages/order-details"));
const NotFound = lazy(() => import("./pages/not-found"));
const HelpLine = lazy(() => import("./pages/help-line"));
const UserDetails = lazy(() => import("./pages/user-details"));
const Htimes = lazy(() => import("./components/client-category/htimes"));
const RecentlySold = lazy(() => import("./pages/recently-sold"));

function App(props) {
  const market_start_date = "Jan 22, 2022 03:30:00";

  const [market_time, set_market_time] = useState();

  const dispatch = useDispatch();
  const [online, setOnline] = useState(true);

  const { lang, user } = useSelector((state) => state);

  const timeFunction = (check = false) => {
    var offset = new Date().getTimezoneOffset();

    var market_start_date_utc = new Date(market_start_date);
    market_start_date_utc.setMinutes(
      market_start_date_utc.getMinutes() - offset
    );

    var s_time = new Date();

    if (check) s_time.setSeconds(s_time.getSeconds() + 2);

    if (new Date(market_start_date_utc) < s_time) {
      dispatch(market_live_thunk());
    } else {
      set_market_time(market_start_date_utc);
    }
  };

  useEffect(() => {
    timeFunction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = () => {
    timeFunction(true);
  };

  useEffect(() => {
    props.change_lang(lang);
    setLanguage(lang);
  }, [props, lang]);

  const checkSystemTimer = (input) => {
    var offset = new Date().getTimezoneOffset();

    var sys_time = new Date();
    sys_time.setMinutes(sys_time.getMinutes() - -1 * offset);
    sys_time.toString();
  };

  const getServerTime = async () => {
    try {
      const result = await getServerTimeApi();
      checkSystemTimer(result.data.data.time);
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 48 ~ getServerTime ~ error", error);
    }
  };

  useEffect(() => {
    const token = getCookies();
    if (token) dispatch(user_load_by_token_thunk(token));

    if (user.data?.user && !token) dispatch(user_logout_thunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setOnline(navigator.onLine);
    });
    window.addEventListener("offline", (event) => {
      setOnline(navigator.onLine);
    });
    getServerTime();
  }, []);

  return (
    <>
      <div style={{ display: "none" }}>
        {market_time && (
          <NFTCounter time={market_time} handleEndEvent={handleCheck} />
        )}
      </div>

      {!online && (
        <div className="offline-ribbon">
          <div className="first">
            You are offline, please check you internet connection
          </div>
          <div>
            <FaTimes onClick={() => setOnline(true)} role={"button"} />
          </div>
        </div>
      )}

      <div className="top-loader"></div>
      <div className="whole-content">
        <Router basename="/">
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Switch>
              <Route exact path="/details/:slug" component={Details} />
              <Route
                exact
                path="/order/details/:slug/:orderSlug"
                component={OrderDetails}
              />
              <Route exact path="/explore/category/:slug" component={Explore} />
              <Route exact path="/" component={Home} />
              <Route exact path="/help-line" component={HelpLine} />
              <Route exact path="/htimes" component={Htimes} />
              <Route
                exact
                path="/nfts/recently-sold"
                component={RecentlySold}
              />

              <Route exact path="/user/:slug/details" component={UserDetails} />
              <Route path="/not-found" component={NotFound} />
              <Route exact component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    change_lang: (input) => {
      dispatch(change_lang_action(input));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.login ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
