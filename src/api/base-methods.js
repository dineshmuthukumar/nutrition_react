import baseAxios from "./axios-base-utils";

import axios from "axios";

export const LoginApi = (props) => baseAxios.post("/login", { ...props });

export const registerApi = (props) => baseAxios.post("/register", { ...props });

export const LoginWithOtp = (props) =>
  baseAxios.post("/verification/otp", { ...props });

export const getCategoryApi = () => baseAxios.get("/category");

export const userApi = (token) =>
  baseAxios.get("/user", { headers: { Authorization: token } });


export const homeContentApi = (token) => baseAxios.get("/homecontent");

export const getNotificationApi = (page) => baseAxios.get(`/notifications`);

export const getsubCategoryApi = (subcategoryId) =>
  baseAxios.get(`/subcategory/details?subCategoryId=${subcategoryId}`);

export const signOutApi = () => baseAxios.delete("/logout");


export const getsubCategoryListApi = () => baseAxios.get(`/subcategory/list`);


export const readNotificationApi = () =>
  baseAxios.post("/users/notification_read");

export const creatorApplicationApi = (input) =>
  baseAxios.post(`/creator_register`, input);

export const getServerTimeApi = () =>
  axios.get(
    `${process.env.REACT_APP_BASE_SERVER_URL.replace("api/v1", "")}/time`
  );

export const artistApi = (slug) => baseAxios.get(`/celebrities/${slug}`);

export const subscribeApi = (email, source) =>
  baseAxios.post("/subscribe_emails", { subscribe_emails: { email, source } });

export const tournamentsApi = () => baseAxios.get("/tournaments");
