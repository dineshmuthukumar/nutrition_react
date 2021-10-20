import axios from "axios";
import { getCookies, removeCookies } from "../utils/cookies";
import { toast } from "react-toastify";
import { store } from "./../redux/store";
import { user_logout_thunk } from "./../redux/thunk/user_thunk";

const baseAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_SERVER_URL,
});

// axios.defaults.baseURL = process.env.REACT_APP_BASE_SERVER_URL;

const auth_token = getCookies();

if (auth_token) baseAxios.defaults.headers.common["Authorization"] = auth_token;

baseAxios.interceptors.request.use(
  function (config) {
    document.body.classList.add("loading-indicator");
    return config;
  },
  function (error) {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error);
  }
);

baseAxios.interceptors.response.use(
  (response) => {
    document.body.classList.remove("loading-indicator");

    if (!getCookies()) store.dispatch(user_logout_thunk());
    return response;
  },
  (error) => {
    document.body.classList.remove("loading-indicator");
    if (error?.response.status === 401) {
      removeCookies();
      // toast.warn("Session expired, signin again");
    }
    return Promise.reject(error);
  }
);

export default baseAxios;
