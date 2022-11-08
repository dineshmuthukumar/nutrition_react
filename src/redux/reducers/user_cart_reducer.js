import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  GET_CART_LIST_REQUEST,
  GET_CART_LIST_SUCCESS,
  GET_CART_LIST_FAILURE,
  PROCEED_CHECKOUT_REQUEST,
  PROCEED_CHECKOUT_SUCCESS,
  PROCEED_CHECKOUT_FAILURE,
  CLEAR_CART,
  CHECKOUT_EVENT,
} from "../actions/user_cart_action";

const initState = {
  data: {},
  checkout: false,
  loading: false,
  error: false,
  errorData: {},
};

const user_cart_reducer = (state = initState, { payload, type }) => {
  if (type === ADD_TO_CART_REQUEST) {
    state = { ...state, loading: true };
  }

  if (type === ADD_TO_CART_SUCCESS) {
    state = {
      ...state,
      loading: false,
      data: {
        ...state.data,
        total_count: payload.count,
      },
    };
  }

  if (type === ADD_TO_CART_FAILURE) {
    state = { ...state, loading: false, error: true, errorData: payload };
  }

  if (type === REMOVE_FROM_CART_REQUEST) {
    state = { ...state, loading: true };
  }

  if (type === REMOVE_FROM_CART_SUCCESS) {
    state = {
      ...state,
      loading: false,
      data: {
        ...state.data,
        total_count: payload?.length,
      },
    };
  }

  if (type === REMOVE_FROM_CART_FAILURE) {
    state = { ...state, loading: false, error: true, errorData: payload };
  }

  if (type === GET_CART_LIST_REQUEST) {
    state = { ...state, loading: true };
  }

  if (type === GET_CART_LIST_SUCCESS) {
    state = { ...state, loading: false, data: payload };
  }

  if (type === GET_CART_LIST_FAILURE) {
    state = { ...state, loading: false, error: true, errorData: payload };
  }

  if (type === PROCEED_CHECKOUT_REQUEST) {
    state = { ...state, loading: true };
  }

  if (type === PROCEED_CHECKOUT_SUCCESS) {
    state = { ...state, loading: false, data: payload };
  }

  if (type === PROCEED_CHECKOUT_FAILURE) {
    state = { ...state, loading: false, error: true, errorData: payload };
  }

  if (type === CLEAR_CART) {
    state = {
      ...state,
      data: {},
      loading: false,
      error: false,
      errorData: {},
    };
  }

  if (type === CHECKOUT_EVENT) {
    state = { ...state, checkout: payload };
  }

  return state;
};

export default user_cart_reducer;
