import { toast } from "react-toastify";
import ReactPixel from "react-facebook-pixel";
import {
  addToCartApi,
  removeFromCartApi,
  getCartListApi,
  //checkoutApi,
} from "../../api/base-methods";

import { getProductDetailsApi } from "../../api/base-methods";
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
  checkout_event,
  clear_cart_action,
} from "../actions/user_cart_action";

export const add_to_cart_thunk = (productid, type = "BASIC", saleAmount) => {
  return async (dispatch) => {
    try {
      dispatch(add_to_cart_action_request());
      dispatch(get_cart_list_request());
      let prodId = { productId: productid, type: type, amount: saleAmount };
      const result = await addToCartApi(prodId);
      //console.log(result?.data?.responseData?.product, "result?.data");
      dispatch(add_to_cart_action_success(result?.data?.responseData?.cart));
      dispatch(get_cart_list_thunk());
      toast.success("The Product is successfully added to your cart.", {
        autoClose: 2000,
      });

      // Meta Pixel
    } catch (err) {
      debugger;
      console.log(err?.response?.status);
      if (err?.response?.status === 404) {
        toast.error("The Product has either been sold or no longer listed.", {
          autoClose: 2000,
        });
      }
      dispatch(add_to_cart_action_failure(err));
    }
  };
};

export const remove_from_cart_thunk = (line_item_slug) => {
  return async (dispatch) => {
    try {
      dispatch(remove_from_cart_action_request());
      const result = await removeFromCartApi(line_item_slug);
      dispatch(remove_from_cart_action_success(result.data.data));
      dispatch(get_cart_list_thunk());
      toast.success("Removed from cart successfully", {
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
      dispatch(remove_from_cart_action_failure(err));
    }
  };
};

const getProductDetail = async (prodID) => {
  // try {
  //   setNotiLoading(true);
  const result = await getProductDetailsApi(prodID);
  //console.log(result.data.responseData.product);
  return result.data.responseData.product;
  // } catch (error) {
  //   setNotiLoading(false);

  //   console.log(
  //     "🚀 ~ file: index.js ~ line 49 ~ getProductDetail ~ error",
  //     error
  //   );
  //}
};
export const get_cart_list_thunk = () => {
  return async (dispatch) => {
    try {
      dispatch(get_cart_list_request());
      const result = await getCartListApi();
      //console.log(result, "result");
      dispatch(get_cart_list_success(result?.data?.responseData));
    } catch (err) {
      console.log(err);
      dispatch(get_cart_list_failure(err));
    }
  };
};

// export const proceed_checkout_thunk = (selectedItems) => {
//   return async (dispatch) => {
//     try {
//       dispatch(proceed_checkout_request());
//       const result = await checkoutApi({
//         selectedItems,
//       });
//       dispatch(proceed_checkout_success(result.data.data));
//     } catch (err) {
//       console.log(err);
//       dispatch(proceed_checkout_failure(err));
//     }
//   };
// };

export const clear_cart_thunk = () => {
  return async (dispatch) => {
    try {
      dispatch(clear_cart_action());
    } catch (err) {
      console.log(err);
    }
  };
};

export const checkout_event_thunk = (event) => {
  return async (dispatch) => {
    dispatch(checkout_event(event));
  };
};
