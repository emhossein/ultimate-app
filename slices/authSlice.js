import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import actionTypes from '../config/actionTypes';
import regeneratorRuntime from 'regenerator-runtime';
import asyncThunk from '../utils/asyncThunk';

export const getAuthStatus = asyncThunk(actionTypes.LOGIN, 'login');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logged: null,
    loading: null,
    user: [],
  },
  reducers: {
    logout: state => {
      state.logged = false;
    },
  },
  extraReducers: {
    [getAuthStatus.pending]: state => {
      (state.logged = false), (state.loading = true);
    },
    [getAuthStatus.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.logged = true;
      state.loading = false;
    },
    [getAuthStatus.rejected]: state => {
      state.logged = false;
      state.loading = false;
      state.user = [];
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
