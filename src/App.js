import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { useSelector, connect } from "react-redux";

import CustomToastComponent from "./components/toast/custom-toast";

import "./App.css";
import { change_lang_action } from "./redux/actions/lang_action";
import { setLanguage } from "react-multi-lang";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = lazy(() => import("./pages/home"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const PaymentMethod = lazy(() => import("./pages/payment-method"));
const Confirmation = lazy(() => import("./pages/confirmation"));

function App(props) {
  const state = useSelector((state) => state);

  useEffect(() => {
    props.change_lang(state.lang);
    setLanguage(state.lang);
  }, [props, state.lang]);

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
                <Route
                  exact
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route exact path="/signup" component={Register} />
                <Route exact path="/signin" component={Login} />
                <Route exact path="/confirmation" component={Confirmation} />
                <Route exact path="/payment-method" component={PaymentMethod} />
                <PrivateRoute exact path="/accounts" component={Profile} />
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
