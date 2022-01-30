import { useMutation } from "react-query";
import axios from "../config/api";

export const getMovementsById = (id) =>
  axios.get(`/api/movements/`, { params: { id: id } }).then((res) => res.data);

export function useMovementsById() {
  return useMutation(({ id }) => getMovementsById(id));
}
