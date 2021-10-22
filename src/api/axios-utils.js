import axios from "axios";
import { getCookies, removeCookies } from "../utils/cookies";
import { toast } from "react-toastify";
import { store } from "./../redux/store";
import { user_logout_thunk } from "./../redux/thunk/user_thunk";

const appAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
// axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const auth_token = getCookies();

if (auth_token) appAxios.defaults.headers.common["Authorization"] = auth_token;

appAxios.interceptors.request.use(
  function (config) {
    document.body.classList.add("loading-indicator");
    const auth_token = getCookies();
    if (auth_token) config.headers.Authorization = auth_token;
    return config;
  },
  function (error) {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
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

export default appAxios;
