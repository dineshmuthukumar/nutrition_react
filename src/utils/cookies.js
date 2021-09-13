import Cookies from "universal-cookie";

const cookie_token = "bl_base_user_token";

const cookies = new Cookies();

export const getCookies = () => {
  return cookies.get(cookie_token);
};
