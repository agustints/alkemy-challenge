import { useQuery } from "react-query";
import axios from "../config/api";

export const logout = () =>
  axios.get("/api/users/logout").then((res) => res.data);
