import { useQuery } from "react-query";
import axios from "../config/api";

export const getCategories = () =>
  axios.get(`/api/categories`).then((res) => res.data);

export function useCategories() {
  return useQuery("getCategories", () => getCategories());
}
