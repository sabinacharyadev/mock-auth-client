import { getAccessToken, getUser } from "../axios/UserAxios";
import { getUsers } from "./userSlice";

export const getUserAction = (token) => async (dispatch) => {
  try {
    const response = await getUser(token);
    if (response.status === "success") {
      dispatch(getUsers(response.data));
    }
    if (response.message === "Invalid token") {
      sessionStorage.setItem("accessToken", "");
      dispatch(getUsers({}));
      dispatch(autoLoginAction());
    }
  } catch (error) {
    console.log(error);
  }
};

export const autoLoginAction = () => async (dispatch) => {
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (accessToken && refreshToken) {
    return dispatch(getUserAction(accessToken));
  }

  if (!accessToken && refreshToken) {
    const response = await getAccessToken(refreshToken);
    sessionStorage.setItem("accessToken", response.data);
    dispatch(getUserAction(response.data));
    return;
  }

  if (!accessToken && !refreshToken) {
    return;
  }

  if (!refreshToken) return;
};
