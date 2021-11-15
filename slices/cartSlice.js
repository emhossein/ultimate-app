import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        });
      }
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.id = newItem.id;
      }
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity--;
      state.totalPrice -= newItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== newItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    deleteItemFromCart(state, action) {
      const newItem = action.payload;
      state.items = state.items.filter(item => item.id !== newItem.id);
      state.totalQuantity -= newItem.quantity;
      state.totalPrice -= newItem.totalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
