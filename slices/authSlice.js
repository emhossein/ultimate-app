import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import regeneratorRuntime from 'regenerator-runtime';

export const getAuthStatus = createAsyncThunk(
  'auth/getAuthStatus',
  async () => {
    return fetch(
      'https://6188ec60d0821900178d7620.mockapi.io/products/register'
    ).then(res => res.json());
  }
);
export const postAuthRegister = createAsyncThunk(
  'auth/postAuthRegister',
  async payload => {
    return fetch(
      'https://6188ec60d0821900178d7620.mockapi.io/products/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    ).then(res => res.json());
  }
);

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
    [postAuthRegister.pending]: state => {
      (state.logged = false), (state.loading = true);
    },
    [postAuthRegister.fulfilled]: (state, action) => {
      state.user = action.response;
      state.logged = true;
      state.loading = false;
    },
    [postAuthRegister.rejected]: state => {
      state.logged = false;
      state.loading = false;
      state.user = [];
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
