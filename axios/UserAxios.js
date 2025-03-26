import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_ENDPOINT = "/api/v1/user";

// CREATE USER | POST
export const createUser = async (userObject) => {
  const response = await axios
    .post(`${API_URL}${API_ENDPOINT}`, userObject)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// LOGIN USER | POST
export const loginUser = (userObject) => {
  const response = axios
    .post(`${API_URL}${API_ENDPOINT}/login`, userObject)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};
