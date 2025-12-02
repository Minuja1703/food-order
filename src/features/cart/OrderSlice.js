import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    value: [],
  },
  reducers: {
    addOrders: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addOrders } = orderSlice.actions;
export default orderSlice.reducer;
