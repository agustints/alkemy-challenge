import { useMutation } from "react-query";
import axios from "../config/api";
import { queryClient } from "../pages/_app";

export const editMovement = (id, concept, amount, date, category) =>
  axios
    .post(`/api/movements/edit`, { id, concept, amount, date, category })
    .then((res) => res.data);

export function useEditMovement() {
  return useMutation(
    ({ id, concept, amount, date, category }) =>
      editMovement(id, concept, amount, date, category),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries();
      },
    }
  );
}
