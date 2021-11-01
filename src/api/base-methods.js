import baseAxios from "./axios-base-utils";

export const registerApi = (props) =>
  baseAxios.post("/register", { user: { ...props } });

export const signOutApi = () => baseAxios.delete("/logout");

export const userApi = (token) =>
  baseAxios.get("/users/me", { headers: { Authorization: token } });

export const getNotificationApi = (page) =>
  baseAxios.get(`/users/notifications?page=${page}`);

export const readNotificationApi = () =>
  baseAxios.post("/users/notification_read");

export const getServerTimeApi = () => baseAxios.get("/server/time");
