import axios from "axios";

import {
  user_login_action_request,
  user_login_action_success,
  user_login_action_fauilure,
  user_logout_action,
} from "../actions/user_action";

export const user_login_thunk = (input, toast) => {
  return async (dispatch) => {
    try {
      dispatch(user_login_action_request());

      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/1`
      );

      if (result.status === 201) {
        dispatch(user_login_action_success(input));
      }
    } catch (err) {
      dispatch(user_login_action_fauilure(err));
    }
  };
};

export const user_logout_thunk = () => {
  return (dispatch) => {
    dispatch(user_logout_action());
  };
};
