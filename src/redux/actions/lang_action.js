export const CHANGE_LANG = "CHANGE_LANG";

export const change_lang_action = (input) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LANG,
      payload: input,
    });
  };
};
