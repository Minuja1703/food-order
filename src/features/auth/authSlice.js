import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("authUser"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: storedUser || null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
