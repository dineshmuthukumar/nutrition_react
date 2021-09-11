const token_name = "rukx-token";

export const set_user = (input) => {
  localStorage.setItem(token_name, JSON.stringify(input));
};

export const get_user = () => {
  const info = localStorage.getItem(token_name);
  return JSON.parse(info);
};

export const remove_user = () => {
  localStorage.removeItem(token_name);
};
