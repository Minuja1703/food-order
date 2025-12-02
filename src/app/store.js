import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/cart/OrderSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
});
