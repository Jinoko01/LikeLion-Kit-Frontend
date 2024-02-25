import { useQuery } from "react-query";
import { login, register, check, logout } from "../../lib/api/auth";

export const useLogin = ({ email, password }) => {
  return useQuery("post-login", () => login({ email, password }));
};

export const useRegister = ({ email, name, password, track, major }) => {
  return useQuery("post-register", () =>
    register({ email, name, password, track, major })
  );
};

export const useCheck = () => {
  return useQuery("get-check", () => check());
};

export const useLogout = () => {
  return useQuery("post-logout", () => logout());
};
