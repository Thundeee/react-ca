import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice/cart";

export const store = configureStore({
  reducer: {
    cartHandling: cartSlice,
  },
});
