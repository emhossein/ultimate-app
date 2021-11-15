import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'Products/getProducts',
  async () => {
    return fetch(
      'https://6188ec60d0821900178d7620.mockapi.io/products/products'
    ).then(res => res.json());
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: null,
    products: [],
  },
  extraReducers: {
    [getProducts.pending]: state => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [getProducts.rejected]: state => {
      state.loading = false;
      state.products = [];
    },
  },
});

export default productsSlice.reducer;
