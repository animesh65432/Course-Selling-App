import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
  name: "Auth",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {
    addthetokens: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removetoken: (state, action) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const { addthetokens, removetoken } = authslice.actions;
export default authslice.reducer;
