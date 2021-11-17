import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import actionTypes from '../config/actionTypes';
import asyncThunk from '../utils/asyncThunk';

export const getProducts = asyncThunk(actionTypes.GET_LIST_PRODUCT, 'products');

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
