import { combineReducers } from "redux";
import user_reducer from "./user_reducer";
import lang_reducer from "./lang_reducer";

const rootReducer = combineReducers({
  lang: lang_reducer,
  user: user_reducer,
});

export default rootReducer;
