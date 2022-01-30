import { useQuery } from "react-query";
import axios from "../config/api";

export const getBalance = () =>
  axios.get(`/api/movements/balance`).then((res) => res.data);

export function useBalance() {
  return useQuery("getBalance", () => getBalance());
}
