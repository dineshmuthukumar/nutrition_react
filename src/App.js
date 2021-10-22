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
import {
  user_load_by_token_thunk,
  user_logout_thunk,
} from "./redux/thunk/user_thunk";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const NewHome = lazy(() => import("./pages/new-home"));
const Explore = lazy(() => import("./pages/explore-list"));
const NotFound = lazy(() => import("./pages/not-found"));
const Details = lazy(() => import("./pages/details"));

function App(props) {
  const dispatch = useDispatch();
  const [online, setOnline] = useState(true);

  const { lang, user } = useSelector((state) => state);

  useEffect(() => {
    props.change_lang(lang);
    setLanguage(lang);
  }, [props, lang]);

  useEffect(() => {
    const token = getCookies();
    if (token) dispatch(user_load_by_token_thunk(token));

    if (user.data.user && !token) dispatch(user_logout_thunk());
  }, []);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setOnline(navigator.onLine);
    });
    window.addEventListener("offline", (event) => {
      setOnline(navigator.onLine);
    });
  }, []);

  return (
    <>
      {!online && (
        <div className="offline-ribbon">
          You are offline, please check you internet connection
        </div>
      )}

      <div className="top-loader"></div>
      <div className="whole-content">
        <Router>
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
              <Route
                exact
                path="/explore/category/:name/:slug"
                component={Explore}
              />
              <Route exact path="/" component={NewHome} />

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
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
