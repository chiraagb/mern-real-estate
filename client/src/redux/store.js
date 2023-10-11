import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: { user: userReducer },

  // Just to prevent any error from the browser
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
