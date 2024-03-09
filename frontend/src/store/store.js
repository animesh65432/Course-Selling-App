import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authslice.js";

export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});
