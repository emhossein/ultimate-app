import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import actionTypes from '../config/actionTypes';
import regeneratorRuntime from 'regenerator-runtime';
import asyncThunk from '../utils/asyncThunk';

export const getAuthStatus = asyncThunk(actionTypes.LOGIN, 'login');
export const getAuthRegister = asyncThunk(actionTypes.REGISTER, 'register');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logged: null,
    loading: null,
    user: [{ message: '' }],
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
    [getAuthRegister.pending]: state => {
      state.loading = true;
    },
    [getAuthRegister.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [getAuthRegister.rejected]: state => {
      state.logged = false;
      state.loading = false;
      state.user = [];
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
