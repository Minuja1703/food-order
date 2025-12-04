import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    value: [],
  },
  reducers: {
    addOrders: (state, action) => {
      state.value.push(action.payload);

      const myOrderData = JSON.parse(localStorage.getItem("myOrderData")) || [];
      myOrderData.push(state.value);
      localStorage.setItem("myOrderData", JSON.stringify(myOrderData));
    },
  },
});

export const { addOrders } = orderSlice.actions;
export default orderSlice.reducer;
