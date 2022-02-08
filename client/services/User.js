import { useQuery } from "react-query";
import axios from "../config/api";
axios.defaults.withCredentials = true;

export const getWhoami = () =>
  axios
    .get("/api/whoami", {
      withCredentials: true,
    })
    .then((res) => res.data);

export function useWhoami() {
  const { isLoading, error, data, isFetching } = useQuery("whoami", getWhoami, {
    retry: 0,
  });
  return { isLoading, error, data, isFetching };
}
