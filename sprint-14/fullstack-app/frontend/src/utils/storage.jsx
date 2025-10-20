// this avoid typo errors and create standards
const TOKEN_KEY = "TOKEN_super_bananas";

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
