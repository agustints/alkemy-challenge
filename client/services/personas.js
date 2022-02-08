import { useMutation } from "react-query";
import axios from "../config/api";

export const getPersonas = (username, config) =>
  axios
    .get(`/api/personas/ver?username=${username}`, config)
    .then((res) => res.data);

export function usePersonas() {
  return useMutation((username) => getPersonas(username));
}
