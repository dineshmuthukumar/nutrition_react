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


export const getProductDetailsApi = (productId) =>
  baseAxios.get(`/product/details?id=${productId}`);


export const getCitiesApi = (stateId) => baseAxios.get(`/cities/${stateId}`);

export const getStatesApi = () => baseAxios.get(`/states/101`);

export const UpdateProfileApi = (props) =>
  baseAxios.post("/profile", { ...props });

export const CustomPageApi = (page) => baseAxios.get(`/page/${page}`);

export const getCartListApi = (page) => baseAxios.get(`/cart/list`);

export const addToCartApi = (props) =>
  baseAxios.post("/cart/add", { ...props });

export const removeFromCartApi = (props) =>
  baseAxios.get(`/cart/remove/${props}`);

export const blogListApi = (props) => baseAxios.get(`/blogs?page=${props}`);

export const blogListIdApi = (props) => baseAxios.get(`/blogs/${props}`);

export const productListApi = (props) =>
  baseAxios.get(`/product/list?page=${props}`);



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
