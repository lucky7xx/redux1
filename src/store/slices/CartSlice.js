import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], quantity: 0, itemQuantity: {} }, // Add itemQuantity property as an object
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.quantity++;

      // Update item quantity
      if (state.itemQuantity[item.id]) {
        state.itemQuantity[item.id] += item.quantity;
      } else {
        state.itemQuantity[item.id] = item.quantity;
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        const item = state.items[index];
        state.items.splice(index, 1);
        state.quantity--;

        // Update item quantity
        if (state.itemQuantity[itemId]) {
          state.itemQuantity[itemId] -= item.quantity;
          if (state.itemQuantity[itemId] <= 0) {
            delete state.itemQuantity[itemId];
          }
        }
      }
    },
    updateItemInCart(state, action) {
      const updatedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === updatedItem.id
      );

      if (existingItem) {
        existingItem.quantity = updatedItem.quantity;
      }
    },

    resetCart: (state) => {
      state.items = [];
      state.quantity = 0;
      state.itemQuantity = {};
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemInCart,
  resetCart,
} = cartSlice.actions;

export const cartSliceReducer = cartSlice.reducer;
