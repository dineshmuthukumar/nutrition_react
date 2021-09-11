import axios from "./axios-utils";

export const registerApi = (props) =>
  axios.post("/register", { user: { ...props } });
