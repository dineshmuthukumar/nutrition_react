import { signOutApi } from "../../api/base-methods";
import { removeCookies, getCookies } from "../../utils/cookies";
import { userApi } from "../../api/base-methods";

import {
  user_login_action_success,
  user_logout_action,
} from "../actions/user_action";

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
