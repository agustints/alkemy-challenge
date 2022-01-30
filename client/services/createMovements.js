import { useMutation } from "react-query";
import axios from "../config/api";
import { queryClient } from "../pages/_app";
import { getMovements } from "./getMovements";

export const createMovement = (concept, amount, date, type, category) =>
  axios
    .post(`/api/movements`, { concept, amount, date, type, category })
    .then((res) => {
      return res.data;
    });

export function useCreateMovement() {
  return useMutation(
    ({ concept, amount, date, type, category }) =>
      createMovement(concept, amount, date, type, category),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries();
      },
    }
  );
}
