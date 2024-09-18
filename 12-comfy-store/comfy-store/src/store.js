import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

// Redux store

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
