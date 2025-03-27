import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";

const store = configureStore({
  reducers: {
    users: userReducer,
  },
});
export default store;
