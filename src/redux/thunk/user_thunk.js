import { signOutApi } from "../../api/base-methods";
import { removeCookies, getCookies } from "../../utils/cookies";
import { userApi } from "../../api/base-methods";

import { registerApi } from "../../api/base-methods"
import {
  user_login_action_success,
  user_logout_action,
  market_live,
  market_live_off,
  user_login_action_request,
  user_login_otp_action,
  user_login_action_failure
} from "../actions/user_action";


export const user_login_with_email_thunk = (input, returnMessage, setOTP,setId) => {
  return async (dispatch) => {
    try {
      dispatch(user_login_action_request());

      const result = await registerApi(input);

      if (result.data.statusCode === 200) {
        console.log(result?.data?.responseData?.user?._id)
        setOTP(true);
        setId(result?.data?.responseData?.user?._id)
        dispatch(user_login_otp_action());
        console.log(result?.data?.responseData?.user?._id)
      }
    } catch (err) {
      if (err?.status === 422) {
        returnMessage(
          err?.data?.message 
        );
        if (err?.data?.message === "email otp locked") {
          returnMessage(
            "Account lock for security reasons, please login again after 10 mins"
          );
        } else if (err?.data?.error_code == 1001) {
          returnMessage(
            "Your email id does not exists, please signup and try again."
          );
        } else if (err?.data?.error_code == 1002) {
          setOTP(true);
        }
      } else if (err?.status === 406) {
        if (err?.data.message === "login locked") returnMessage("login-locked");
        else returnMessage("confirm-email");
      } else {
        //toast.error("An unexpected error occured. Please try again  later");
      }

      dispatch(user_login_action_failure(err));
    }
  };
};


export const user_logout_thunk = () => {
  return async (dispatch) => {
    try {
      const token = getCookies();
      if (token) await signOutApi();
    } catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
    removeCookies();
    dispatch(user_logout_action());
  };
};

export const user_load_by_token_thunk = (token) => {
  return async (dispatch) => {
    try {
      const user = await userApi(token);

      dispatch(user_login_action_success(user.data.data));
    } catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
  };
};

export const user_load_by_data_thunk = (data) => {
  return async (dispatch) => {
    try {
      console.log(data,"data");
      // const user = await userApi(token);

      dispatch(user_login_action_success(data));
    } catch (err) {
      console.log("🚀 ~ file: user_thunk.js ~ line 58 ~ return ~ err", err);
    }
  };
};

export const market_live_thunk = () => {
  return async (dispatch) => {
    dispatch(market_live());
  };
};

export const market_live_off_thunk = () => {
  return async (dispatch) => {
    dispatch(market_live_off());
  };
};
