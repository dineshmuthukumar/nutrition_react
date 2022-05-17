import { combineReducers } from "redux";
import user_reducer from "./user_reducer";
import lang_reducer from "./lang_reducer";
import user_cart_reducer from "./user_cart_reducer";

const rootReducer = combineReducers({
  lang: lang_reducer,
  user: user_reducer,
  cart: user_cart_reducer,
});

export default rootReducer;
