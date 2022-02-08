import { useMutation } from "react-query";
import axios from "../config/api";
import { queryClient } from "../pages/_app";

export const deleteMovement = (id) =>
  axios.delete(`/api/movements`, { data: id }).then((res) => res.data);

export function useDeleteMovement() {
  return useMutation((id) => deleteMovement(id), {
    onSuccess: async () => {
      console.log("Entra");
      await queryClient.refetchQueries();
    },
  });
}
