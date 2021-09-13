import axios from "./axios-utils";

export const registerApi = (props) =>
  axios.post("/register", { user: { ...props } });

export const signOutApi = () => axios.delete("/logout");

export const userApi = (token) =>
  axios.get("/users/me", { headers: { Authorization: token } });
