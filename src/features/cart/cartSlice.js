import { createSlice } from "@reduxjs/toolkit";

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
      if (item) item.quantity += 1;
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
