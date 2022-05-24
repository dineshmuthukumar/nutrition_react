import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import App from "./App";
//import SiteMaintenance from "./pages/site-maintenance";
import reportWebVitals from "./reportWebVitals";

import { setTranslations } from "react-multi-lang";
import en from "./translations/en.json";
import hi from "./translations/hi.json";
import { store } from "./redux/store";

import "./styles/custom_bootstrap.scss";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./styles/style.scss";

setTranslations({ en, hi });

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={15000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
