import { CHANGE_LANG } from "./../actions/lang_action";

const initState = "en";

const lang_reducer = (state = initState, action) => {
  if (action.type === CHANGE_LANG) {
    state = action.payload;
  }

  return state;
};

export default lang_reducer;
