import cookie from "react-cookies";

const cookie_token = "bl_base_user_token";
const type = "type";
const saleAmount = "saleAmount";

export const setCookiesByName = (name, input) => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
  const maxAge = 365 * 24 * 60 * 60;
  const path = "/";

  cookie.save(name, input, {
    path,
    expires,
    maxAge,
    domain:
      process.env.REACT_APP_ENVIRONMENT === "local"
        ? "localhost"
        : process.env.REACT_APP_COOKIE_DOMAIN_NAME,
    secure: true,
  });
};

export const setCookies = (input) => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
  const maxAge = 365 * 24 * 60 * 60;
  const path = "/";

  cookie.save(cookie_token, input, {
    path,
    expires,
    maxAge,
    domain:
      process.env.REACT_APP_ENVIRONMENT === "local"
        ? "localhost"
        : process.env.REACT_APP_COOKIE_DOMAIN_NAME,
    secure: true,
  });
};

export const removeCookiesByName = (name) => {
  cookie.remove(name, {
    path: "/",
    domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
  });
};

export const getCookies = () => {
  return cookie.load(cookie_token);
};

export const getTypeCookies = () => {
  return cookie.load(type);
};
export const getsaleAmountCookies = () => {
  return cookie.load(saleAmount);
};
export const getproductIdCookies = () => {
  return cookie.load("productid");
};

export const removeCookies = () => {
  cookie.remove(cookie_token, {
    path: "/",
    domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
  });
};
