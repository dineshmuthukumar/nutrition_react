import Cookies from "universal-cookie";

const cookie_token = "bl_base_user_token";

const cookies = new Cookies();

export const getCookies = () => {
  return cookies.get(cookie_token);
};

export const removeCookies = () => {
  // cookies.remove(cookie_token);
  cookies.remove(cookie_token, { domain: ".bafdemo.com" });
};
