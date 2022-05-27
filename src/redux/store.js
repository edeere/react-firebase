import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import itemsReducer from "./slice/itemsSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
  },
});
