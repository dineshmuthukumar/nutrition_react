export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_WALLET_UPDATE = "USER_WALLET_UPDATE";
export const USER_LOGIN_OTP = "USER_LOGIN_OTP";

export const USER_LOGOUT = "USER_LOGOUT";

export const MARKET_LIVE = "MARKET_LIVE";
export const MARKET_LIVE_OFF = "MARKET_LIVE_OFF";

export const CART_LIST_ON = "CART_LIST_ON";
export const CART_LIST_OFF = "CART_LIST_OFF";

export const user_login_action_request = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

export const user_login_action_success = (input) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: input,
  };
};

export const user_login_action_failure = (input) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: input,
  };
};

export const user_logout_action = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const user_wallet_update_action = (input) => {
  return {
    type: USER_WALLET_UPDATE,
    payload: input,
  };
};

export const user_login_otp_action = (input) => {
  return {
    type: USER_LOGIN_OTP,
  };
};

export const market_live = () => {
  return {
    type: MARKET_LIVE,
  };
};

export const market_live_off = () => {
  return {
    type: MARKET_LIVE_OFF,
  };
};

export const cart_list_off = () => {
  return {
    type: CART_LIST_OFF,
  };
};

export const cart_list_on = () => {
  return {
    type: CART_LIST_ON,
  };
};
