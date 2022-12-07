import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_OTP,
  USER_WALLET_UPDATE,
  USER_LOGOUT,
  MARKET_LIVE,
  MARKET_LIVE_OFF,
  CART_LIST_ON,
  CART_LIST_OFF,
} from "./../actions/user_action";

const initState = {
  data: {},
  login: false,
  loading: false,
  error: false,
  errorData: {},
  marketLive: false,
  cartlist: false,
};

const user_reducer = (state = initState, { payload, type }) => {
  if (type === USER_LOGIN_REQUEST) {
    state = { ...state, loading: true };
  }

  if (type === USER_LOGIN_SUCCESS) {
    state = { ...state, loading: false, login: true, data: payload };
  }

  if (type === USER_LOGIN_FAILURE) {
    state = { ...state, loading: false, error: true, errorData: payload };
  }

  if (type === USER_LOGOUT) {
    state = {
      ...state,
      data: {},
      login: false,
      loading: false,
      error: false,
      errorData: {},
      cartlist: false,
    };
  }
  if (type === USER_LOGIN_OTP) {
    state = { ...state, loading: false, login: false };
  }

  if (type === USER_WALLET_UPDATE) {
    state = {
      ...state,
      data: {
        user: {
          ...state.data.user,
          balance: payload.balance,
          locked: payload.locked,
        },
      },
    };
  }

  if (type === MARKET_LIVE) {
    state = { ...state, marketLive: true };
  }

  if (type === MARKET_LIVE_OFF) {
    state = { ...state, marketLive: false };
  }

  if (type === CART_LIST_ON) {
    state = { ...state, cartlist: true };
  }

  if (type === CART_LIST_OFF) {
    state = { ...state, cartlist: false };
  }

  return state;
};

export default user_reducer;
