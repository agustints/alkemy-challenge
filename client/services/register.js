import axios from "../config/api";

export const registerPeople = ({ name, lastname, email, password }) =>
  axios
    .post(`/api/users`, {
      name,
      lastname,
      email,
      password,
    })
    .then((res) => res?.data);
