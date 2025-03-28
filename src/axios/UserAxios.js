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
export const loginUser = async (userObject) => {
  const response = await axios
    .post(`${API_URL}${API_ENDPOINT}/login`, userObject)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// VERIFY USER | PATCH
export const verifyUser = async ({ email, token }) => {
  const response = await axios
    .patch(`${API_URL}${API_ENDPOINT}/verify-user`, {
      email,
      token,
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// GET USER | INDEX
export const getUser = async (accessToken) => {
  return await axios
    .get(`${API_URL}${API_ENDPOINT}`, {
      headers: {
        Authorization: accessToken,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

// GET ACCESS TOKEN
export const getAccessToken = async (refreshToken) => {
  return await axios
    .get(`${API_URL}${API_ENDPOINT}/accessToken`, {
      headers: {
        Authorization: refreshToken,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
