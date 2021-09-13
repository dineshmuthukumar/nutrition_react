import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { useSelector, connect, useDispatch } from "react-redux";

import CustomToastComponent from "./components/toast/custom-toast";
import { change_lang_action } from "./redux/actions/lang_action";
import { setLanguage } from "react-multi-lang";
import { getCookies } from "./utils/cookies";
import {
  user_load_by_token_thunk,
  user_logout_thunk,
} from "./redux/thunk/user_thunk";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/not-found"));
const Details = lazy(() => import("./pages/details"));

function App(props) {
  const dispatch = useDispatch();

  const { lang, user } = useSelector((state) => state);

  useEffect(() => {
    props.change_lang(lang);
    setLanguage(lang);

    const token = getCookies();
    if (!user.data.user && token) dispatch(user_load_by_token_thunk(token));

    if (user.data.user && !token) dispatch(user_logout_thunk());
  }, [props, lang]);

  return (
    <>
      <div className="top-loader"></div>
      <div className="whole-content">
        <ToastProvider
          placement="bottom-right"
          components={{ Toast: MyCustomToast }}
          autoDismissTimeout={1800}
        >
          <Router>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route exact path="/details/:id" component={Details} />
                <Route exact path="/" component={Home} />
                <Route path="/not-found" component={NotFound} />
                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </ToastProvider>
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

const MyCustomToast = (props) => {
  return <CustomToastComponent {...props}></CustomToastComponent>;
};

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
