import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useSelector, connect, useDispatch } from "react-redux";

import { change_lang_action } from "./redux/actions/lang_action";
import { setLanguage } from "react-multi-lang";
import { getCookies } from "./utils/cookies";
import { getServerTimeApi } from "./api/base-methods";
import {
  user_load_by_token_thunk,
  user_logout_thunk,
} from "./redux/thunk/user_thunk";
import "./App.css";
import Stop from "./components/stop";

const NewHome = lazy(() => import("./pages/new-home"));
const Explore = lazy(() => import("./pages/explore-list"));
const Loot = lazy(() => import("./pages/loot"));
const LootDetail = lazy(() => import("./pages/loot-detail"));
const NotFound = lazy(() => import("./pages/not-found"));
const Details = lazy(() => import("./pages/details"));

function App(props) {
  const dispatch = useDispatch();
  const [online, setOnline] = useState(true);
  const [diffTimer, setDiffTimer] = useState(false);

  const { lang, user } = useSelector((state) => state);

  useEffect(() => {
    props.change_lang(lang);
    setLanguage(lang);
  }, [props, lang]);

  const checkSystemTimer = (input) => {
    var offset = new Date().getTimezoneOffset();

    var sys_time = new Date();
    sys_time.setMinutes(sys_time.getMinutes() - -1 * offset);
    sys_time.toString();

    var server_time = Date.parse(input);

    // console.log(
    //   "🚀 ~ file: App.js ~ line 48 ~ checkSystemTimer ~ server_time",
    //   input,
    //   sys_time
    // );

    // var seconds = (server_time.getTime() - sys_time.getTime()) / 1000;

    // if (seconds >= 35) {
    //   setDiffTimer(true);
    // } else {
    //   setDiffTimer(false);
    // }
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

    if (user.data.user && !token) dispatch(user_logout_thunk());
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
      {!online && (
        <div className="offline-ribbon">
          You are offline, please check you internet connection
        </div>
      )}

      {/* {diffTimer && (
        <div className="offline-ribbon">
          Your system time is not match with the internet timing, please sync
          with live time to have a flawless experience
        </div>
      )} */}

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
                path="/details/:slug/:placebid"
                component={Details}
              />
              {/* <Route exact path="/explore/loot/:slug" component={Loot} /> */}

              <Redirect exact path="/explore/loot/:slug" to="/" />
              <PrivateRoute
                exact
                path="/loot/nft/detail/:slug"
                component={LootDetail}
              />
              {/* <Route exact path="/explore/loot/:slug" component={Stop} />
              <PrivateRoute
                exact
                path="/loot/nft/detail/:slug"
                component={Stop}
              /> */}
              <Route
                exact
                path="/explore/category/:name/:slug"
                component={Explore}
              />
              <Route exact path="/" component={NewHome} />
              {/* <Route exact path="/" component={Stop} /> */}

              {/* <Route exact path="/new" component={Home} /> */}
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
