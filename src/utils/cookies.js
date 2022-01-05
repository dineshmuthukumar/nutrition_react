import Cookies from "universal-cookie";

const cookie_token = "bl_base_user_token";

const cookies = new Cookies();

export const setCookiesByName = (name, input) => {
  if (process.env.REACT_APP_ENVIRONMENT === "local") {
    cookies.set(name, input);
  } else {
    cookies.set(name, input, {
      domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
    });
  }
};

export const setCookies = (input) => {
  if (process.env.REACT_APP_ENVIRONMENT === "local") {
    cookies.set(cookie_token, input);
  } else {
    cookies.set(cookie_token, input, {
      domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
    });
  }
};

export const removeCookiesByName = (name) => {
  if (process.env.REACT_APP_ENVIRONMENT === "local") {
    cookies.remove(name, {
      domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
      path: "/",
    });
  } else {
    cookies.remove(name, {
      domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
      path: "/",
    });
  }
};

export const getCookies = () => {
  return cookies.get(cookie_token);
};

export const removeCookies = () => {
  if (process.env.REACT_APP_ENVIRONMENT === "local") {
    cookies.remove(cookie_token, {
      domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
      path: "/",
    });
  } else {
    cookies.remove(cookie_token, {
      domain: process.env.REACT_APP_COOKIE_DOMAIN_NAME,
      path: "/",
    });
  }

  (function () {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
        var cookieBase =
          encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) +
          "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" +
          d.join(".") +
          " ;path=";
        var p = window.location.pathname.split("/");
        document.cookie = cookieBase + "/";
        while (p.length > 0) {
          document.cookie = cookieBase + p.join("/");
          p.pop();
        }
        d.shift();
      }
    }
  })();
};
