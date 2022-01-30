import { useMutation } from "react-query";
import axios from "../config/api";

const login = (user) => axios.post("/api/users/login", user);
const register = (user) => axios.post("/api/users/register", user);

export const UseLogin = () => {
  return useMutation(login);
};

export const UseRegister = () => {
  return useMutation(register);
};
