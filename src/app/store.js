import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/cart/OrderSlice";
import authReducer from "../features/auth/authSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    auth: authReducer,
  },
});
