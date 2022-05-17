export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";
export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_FAILURE = "REMOVE_FROM_CART_FAILURE";
export const GET_CART_LIST_REQUEST = "GET_CART_LIST_REQUEST";
export const GET_CART_LIST_SUCCESS = "GET_CART_LIST_SUCCESS";
export const GET_CART_LIST_FAILURE = "GET_CART_LIST_FAILURE";
export const PROCEED_CHECKOUT_REQUEST = "PROCEED_CHECKOUT_REQUEST";
export const PROCEED_CHECKOUT_SUCCESS = "PROCEED_CHECKOUT_SUCCESS";
export const PROCEED_CHECKOUT_FAILURE = "PROCEED_CHECKOUT_FAILURE";
export const CLEAR_CART = "CLEAR_CART";
export const CHECKOUT_EVENT = "CHECKOUT_EVENT";

export const add_to_cart_action_request = () => {
  return {
    type: ADD_TO_CART_REQUEST,
  };
};

export const add_to_cart_action_success = (input) => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: input,
  };
};

export const add_to_cart_action_failure = (input) => {
  return {
    type: ADD_TO_CART_FAILURE,
    payload: input,
  };
};

export const remove_from_cart_action_request = () => {
  return {
    type: REMOVE_FROM_CART_REQUEST,
  };
};

export const remove_from_cart_action_success = (input) => {
  return {
    type: REMOVE_FROM_CART_SUCCESS,
    payload: input,
  };
};

export const remove_from_cart_action_failure = (input) => {
  return {
    type: REMOVE_FROM_CART_FAILURE,
    payload: input,
  };
};

export const get_cart_list_request = () => {
  return {
    type: GET_CART_LIST_REQUEST,
  };
};

export const get_cart_list_success = (input) => {
  return {
    type: GET_CART_LIST_SUCCESS,
    payload: input,
  };
};

export const get_cart_list_failure = (input) => {
  return {
    type: GET_CART_LIST_FAILURE,
    payload: input,
  };
};

export const proceed_checkout_request = () => {
  return {
    type: PROCEED_CHECKOUT_REQUEST,
  };
};

export const proceed_checkout_success = (input) => {
  return {
    type: PROCEED_CHECKOUT_SUCCESS,
    payload: input,
  };
};

export const proceed_checkout_failure = (input) => {
  return {
    type: PROCEED_CHECKOUT_FAILURE,
    payload: input,
  };
};

export const clear_cart_action = () => {
  return {
    type: CLEAR_CART,
  };
};

export const checkout_event = (input) => {
  return {
    type: CHECKOUT_EVENT,
    payload: input,
  };
};
