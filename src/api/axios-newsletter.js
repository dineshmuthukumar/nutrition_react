import axios from "axios";

const newsletterAxios = axios.create({
  baseURL: process.env.REACT_APP_NEWSLETTER_API,
});

newsletterAxios.interceptors.request.use(
  function (config) {
    document.body.classList.add("loading-indicator");
    return config;
  },
  function (error) {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error);
  }
);

newsletterAxios.interceptors.response.use(
  (response) => {
    document.body.classList.remove("loading-indicator");
    return response;
  },
  (error) => {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error);
  }
);

export const sendEmailNewletter = (props) =>
  newsletterAxios.post(process.env.REACT_APP_NEWSLETTER_API, props);

export default newsletterAxios;
