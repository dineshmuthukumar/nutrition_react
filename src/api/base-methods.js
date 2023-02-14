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

export const getProductDetailsSlugApi = (productId) =>
  baseAxios.get(`/product/details?slug=${productId}`);

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

export const removeFromCartAllApi = () => baseAxios.get(`/cart/remove`);

export const blogListApi = (props) => baseAxios.get(`/blogs?page=${props}`);

export const blogListIdApi = (props) => baseAxios.get(`/blogs/${props}`);

export const productListApi = (props) =>
  baseAxios.get(`/product/list?page=${props}`);

export const cmsPages = (props) => baseAxios.get(`/pages`);

export const cmsPagetApi = (props) => baseAxios.get(`/page/${props}`);

export const FreeProductApi = (props) =>
  baseAxios.post(`/freeProduct`, { ...props });

export const getCheckoutApi = (props) =>
  baseAxios.post(`/checkout/order`, { ...props });

export const OrderSuccessApi = (props) =>
  baseAxios.post(`/checkout/order/response/success`, { ...props });

export const OrdersFailedApi = (props) =>
  baseAxios.post(`/checkout/order/response/failed`, { ...props });

export const productListCategoryApi = (props) =>
  baseAxios.get(`/product/list?categoryId=${props}`);

export const productListCategoryApiwithpage = (page, categoriesId) =>
  baseAxios.get(`/product/list?page=${page}&categoryId=${categoriesId}`);

export const productListSubCategoryApiwithpage = (page, categoriesId) =>
  baseAxios.get(`/product/list?page=${page}&code=${categoriesId}`);

export const getOrderListApi = (page) =>
  baseAxios.get(`/order/history?page=${page}`);

export const getAddonListApi = (page) => baseAxios.get(`/product/addons/list`);

export const getPromocodeListApi = (page) => baseAxios.get(`/promocode/list`);

export const applypromocodeApi = (props, cartId) =>
  baseAxios.post(`/cart/coupon/${cartId}/add`, { ...props });

export const removepromocodeApi = (cartId) =>
  baseAxios.post(`/cart/coupon/${cartId}/remove`);

export const settingsApi = () => baseAxios.get(`/settings`);

export const EnquiryApi = (props) => baseAxios.post(`/enquiry`, { ...props });

export const EnquiryApiContact = (props) =>
  baseAxios.post(`/enquiryContact`, { ...props });

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

export const aboutusApi = () => baseAxios.get("/cms/page/aboutus");
export const exploreApi = () => baseAxios.get("/cms/page/explore");
export const dominanceApi = () => baseAxios.get("/cms/page/dominance");
