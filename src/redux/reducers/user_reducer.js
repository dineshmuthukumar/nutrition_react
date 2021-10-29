import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_WALLET_UPDATE,
  USER_LOGOUT,
} from "./../actions/user_action";

const initState = {
  data: {},
  login: false,
  loading: false,
  error: false,
  errorData: {},
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
      data: {},
      login: false,
      loading: false,
      error: false,
      errorData: {},
    };
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

  return state;
};

export default user_reducer;
