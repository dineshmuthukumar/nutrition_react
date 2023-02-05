import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { useSelector, connect, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router";
//import NFTCounter from "./components/nft-counter";
import { change_lang_action } from "./redux/actions/lang_action";
import { setLanguage } from "react-multi-lang";
import { getCookies } from "./utils/cookies";
import { getServerTimeApi } from "./api/base-methods";
import {
  user_load_by_token_thunk,
  user_logout_thunk,
  market_live_thunk,
  market_live_off_thunk,
} from "./redux/thunk/user_thunk";
import { setCookiesByName, setCookies } from "./utils/cookies";
import useQuery from "./hook/useQuery";
import mixpanel from "mixpanel-browser";
import loader from "./images/load.gif";
import "./App.css";

import "./styles/demo-food2.min.css";
import "./styles/extra-style.css";
import "./styles/style.min.css";

const NewHome = lazy(() => import("./pages/new-home"));
const Category = lazy(() => import("./pages/category"));
const Product = lazy(() => import("./pages/product"));
const Cart = lazy(() => import("./pages/cart"));
const About = lazy(() => import("./pages/about"));
const blog = lazy(() => import("./pages/blogs"));
const blogPost = lazy(() => import("./pages/blog-post"));
const freetrial = lazy(() => import("./pages/free-trial"));
const contact = lazy(() => import("./pages/contact"));
const privacy = lazy(() => import("./pages/privacy"));
const Terms = lazy(() => import("./pages/terms"));
const Login = lazy(() => import("./pages/login"));
const MyAccount = lazy(() => import("./pages/my-account"));
const ProductList = lazy(() => import("./pages/productlist"));
const Checkout = lazy(() => import("./pages/checkout"));
const Cms = lazy(() => import("./pages/cms"));
const AboutUs = lazy(() => import("./pages/aboutus"));
const Explore = lazy(() => import("./pages/explore"));
const Dominance = lazy(() => import("./pages/dominance"));
const Swiper = lazy(() => import("./pages/Swiper"));

//const SiteMaintenance = lazy(() => import("./pages/si"));

function App(props) {
  const market_start_date = "Jul 13, 2022 11:30:00";

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

    // if (new Date(market_start_date_utc) < s_time) {
    //   dispatch(market_live_thunk());
    // } else {
    //   set_market_time(market_start_date_utc);
    //   dispatch(market_live_off_thunk());
    // }
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
    mixpanel.init("fb37da042db19dafef9b171500d64106", { debug: true });
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

  window.setFiredeskdetails = () => {
    setTimeout(function () {
      if (user.data?.user) {
        // console.log(user.data?.user);
        if (document.getElementById("chat-fc-name")) {
          document.getElementById("chat-fc-name").value =
            user.data?.user.first_name + " " + user.data?.user.last_name;
          document.getElementById("chat-fc-name").disabled = true;
        }

        if (document.getElementById("chat-fc-email")) {
          document.getElementById("chat-fc-email").value =
            user.data?.user.email;
          document.getElementById("chat-fc-email").disabled = true;
        }
        if (document.getElementById("chat-fc-phone")) {
          document.getElementById("chat-fc-phone").value =
            user.data?.user.phone_no;
          document.getElementById("chat-fc-phone").disabled = true;
        }
      }
    }, 1000);
  };

  useEffect(() => {
    const token = getCookies();
    if (token) dispatch(user_load_by_token_thunk(token));

    if (user?.login && !token) dispatch(user_logout_thunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setOnline(navigator.onLine);
    });
    window.addEventListener("offline", (event) => {
      setOnline(navigator.onLine);
    });
    ////getServerTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <div style={{ display: "none" }}>
        {market_time && (
          <NFTCounter time={market_time} handleEndEvent={handleCheck} />
        )}
      </div> */}

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
      <div className="riode-rounded-skin">
        <Router basename="/">
          <Suspense
            fallback={
              // <div className="flone-preloader-wrapper">
              //   <div className="flone-preloader">
              //     <span></span>
              //     <span></span>
              //     <span></span>
              //     <span></span>
              //   </div>
              // </div>
              <div className="d-flex gif-loader">
                <img
                  src={
                    "https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"
                  }
                  alt="loader"
                />
              </div>
            }>
            <Switch>
              <Route exact component={WebContainer} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

const WebContainer = () => {
  // const { url } = useRouteMatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const aid = query.get("aid");

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    if (token) {
      setCookies(token);

      history.replace(pathname);

      dispatch(user_load_by_token_thunk(token));
    }

    // XENA Integration
    if (aid) {
      for (const [key, value] of query.entries()) {
        setCookiesByName(key, value);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route path="/category/:categoryid?" component={Category} />
        <Route exact path="/product/:productid?" component={Product} />
        <Route exact path="/product/details" component={Product} />
        <Route exact path="/product/free/:productid?" component={freetrial} />
        <Route exact path="/product/free/details" component={freetrial} />

        <Route exact path="/about" component={About} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/dominance" component={Dominance} />
        <Route exact path="/blog" component={blog} />
        <Route exact path="/blogpost/:blogid?" component={blogPost} />
        <Route exact path="/freetrial" component={freetrial} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/privacy" component={privacy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/swiper" component={Swiper} />
        {/* <Route exact path="/my-account" component={Login} /> */}
        {/* <Route exact path="/site-maintain" component={SiteMaintenance} /> */}
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/products/list/:categoryid?"
          component={ProductList}
        />
        <PrivateRoute exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/accounts" component={MyAccount} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <Route exact path="/cms/:id?" component={Cms} />

        <Route exact component={() => <Redirect to="/"></Redirect>} />
      </Switch>
    </>
  );
};

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
