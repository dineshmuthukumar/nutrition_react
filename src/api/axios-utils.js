import axios from "axios";
import { getCookies, removeCookies } from "../utils/cookies";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const auth_token = getCookies();

if (auth_token) axios.defaults.headers.common["Authorization"] = auth_token;

axios.interceptors.request.use(
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

axios.interceptors.response.use(
  (response) => {
    document.body.classList.remove("loading-indicator");
    return response;
  },
  (error) => {
    document.body.classList.remove("loading-indicator");

    if (error?.response.status === 401) {
      removeCookies();
      toast.warn("Session expired, signin again");
    }

    return Promise.reject(error);
  }
);

export default axios;
