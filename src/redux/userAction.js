import { getUser } from "../axios/UserAxios";
import { getUsers } from "./userSlice";

export const getUserAction = (token) => async (dispatch) => {
  try {
    const response = await getUser(token);
    if (response.status === "success") {
      dispatch(getUsers(response.data));
    }
    if (response.status === "error") {
      dispatch(getUsers({}));
    }
  } catch (error) {
    console.log(error);
  }
};
