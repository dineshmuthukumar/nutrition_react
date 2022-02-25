import baseAxios from "./axios-base-utils";

import axios from "axios";

export const registerApi = (props) =>
  baseAxios.post("/register", { user: { ...props } });

export const signOutApi = () => baseAxios.delete("/logout");

export const userApi = (token) =>
  baseAxios.get("/users/me", { headers: { Authorization: token } });

export const getNotificationApi = (page) =>
  baseAxios.get(`/users/notifications?page=${page}`);

export const readNotificationApi = () =>
  baseAxios.post("/users/notification_read");

export const creatorApplicationApi = (input) =>
  baseAxios.post(`/creator_register`, input);

export const getServerTimeApi = () =>
  axios.get(
    `${process.env.REACT_APP_BASE_SERVER_URL.replace("api/v1", "")}/time`
  );
