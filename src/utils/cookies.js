import Cookies from "universal-cookie";

const cookie_token = "bl_base_user_token";

const cookies = new Cookies();

export const setCookies = (input) => {
  cookies.set(cookie_token, input);
};

export const getCookies = () => {
  return cookies.get(cookie_token);
};

export const removeCookies = () => {
  return cookies.remove(cookie_token);
};
