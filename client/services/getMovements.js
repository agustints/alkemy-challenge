import { useQuery } from "react-query";
import axios from "../config/api";

export const getMovements = ({ queryKey }) =>
  axios
    .get(`/api/movements/`, {
      params: {
        id: queryKey[1] != "null" ? queryKey[1] : null,
        category:
          queryKey[2] != "null" && queryKey[2] != 0 ? queryKey[2] : null,
      },
    })
    .then((res) => res.data);
