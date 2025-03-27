import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;
export const { getUsers } = actions;
export default userReducer;
