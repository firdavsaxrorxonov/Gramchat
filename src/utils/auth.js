// utils/auth.js

export const setAuth = (data) => {
  localStorage.setItem("auth", JSON.stringify(data));
};

export const getAuth = () => {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("auth");
};

export const removeAuth = () => {
  localStorage.removeItem("auth");
};
