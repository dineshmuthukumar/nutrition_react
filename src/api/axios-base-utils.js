import axios from "axios";
import { getCookies } from "../utils/cookies";

axios.defaults.baseURL = process.env.REACT_APP_BASE_SERVER_URL;

const auth_token = getCookies();

if (auth_token) axios.defaults.headers.common["Authorization"] = auth_token;

axios.interceptors.request.use(
  function (config) {
    document.body.classList.add("loading-indicator");
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
    return Promise.reject(error.response);
  }
);

export default axios;
