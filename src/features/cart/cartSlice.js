import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const clickedItem = action.payload;
      const itemExists = state.value.find(
        (x) => x.featuredId === clickedItem.featuredId
      );

      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.value.push({ ...clickedItem, quantity: 1 });
      }
    },

    clearCart: (state) => {
      state.value = [];
    },

    incrementQty: (state, action) => {
      const clickedItemId = action.payload;
      const item = state.value.find((x) => x.featuredId === clickedItemId);

      if (item) {
        if (item.stock > item.quantity) {
          item.quantity += 1;
        } else {
          toast.error(
            `Cannot add more quantity. Maximum available quantity is ${item.stock}.`
          );
        }
      }
    },

    decrementQty: (state, action) => {
      const clickedItemId = action.payload;
      const item = state.value.find((x) => x.featuredId === clickedItemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.value = state.value.filter((x) => x.featuredId !== clickedItemId);
      }
    },

    deleteItem: (state, action) => {
      const clickedItemId = action.payload;
      const item = state.value.find((x) => x.featuredId === clickedItemId);
      if (item)
        state.value = state.value.filter((x) => x.featuredId !== clickedItemId);
    },
  },
});

export const { addToCart, clearCart, incrementQty, decrementQty, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;
