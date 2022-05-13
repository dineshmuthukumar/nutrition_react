import {
  addToCartApi,
  removeFromCartApi,
  clearCartApi,
  getCartListApi,
  checkoutApi,
} from "../../api/methods";
import {
  add_to_cart_action_request,
  add_to_cart_action_success,
  add_to_cart_action_failure,
  remove_from_cart_action_request,
  remove_from_cart_action_success,
  remove_from_cart_action_failure,
  get_cart_list_request,
  get_cart_list_success,
  get_cart_list_failure,
  proceed_checkout_request,
  proceed_checkout_success,
  proceed_checkout_failure,
  clear_cart_action,
} from "../actions/user_cart_action";

export const add_to_cart_thunk = (order_slug, quantity) => {
  return async (dispatch) => {
    try {
      dispatch(add_to_cart_action_request());
      const result = await addToCartApi({ order_slug, quantity });
      dispatch(add_to_cart_action_success(result.data.data));
      dispatch(get_cart_list_thunk());
    } catch (err) {
      console.log(err);
      dispatch(add_to_cart_action_failure(err));
    }
  };
};

export const remove_from_cart_thunk = (line_item_slug) => {
  return async (dispatch) => {
    try {
      dispatch(remove_from_cart_action_request());
      const result = await removeFromCartApi({ line_item_slug });
      dispatch(remove_from_cart_action_success(result.data.data));
      dispatch(get_cart_list_thunk());
    } catch (err) {
      console.log(err);
      dispatch(remove_from_cart_action_failure(err));
    }
  };
};

export const get_cart_list_thunk = () => {
  return async (dispatch) => {
    try {
      dispatch(get_cart_list_request());
      const result = await getCartListApi();
      dispatch(get_cart_list_success(result.data.data));
    } catch (err) {
      console.log(err);
      dispatch(get_cart_list_failure(err));
    }
  };
};

export const proceed_checkout_thunk = (selectedItems) => {
  return async (dispatch) => {
    try {
      dispatch(proceed_checkout_request());
      const result = await checkoutApi({
        selectedItems,
      });
      dispatch(proceed_checkout_success(result.data.data));
    } catch (err) {
      console.log(err);
      dispatch(proceed_checkout_failure(err));
    }
  };
};

export const clear_cart_thunk = () => {
  return async (dispatch) => {
    try {
      const result = await clearCartApi();
      dispatch(clear_cart_action());
    } catch (err) {
      console.log(err);
    }
  };
};
