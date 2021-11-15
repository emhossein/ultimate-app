import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAuthStatus = createAsyncThunk(
  'auth/getAuthStatus',
  async () => {
    return fetch(
      'https://6188ec60d0821900178d7620.mockapi.io/products/login'
    ).then(res => res.json());
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logged: null,
    loading: null,
    user: [],
    showCart: false,
  },
  reducers: {
    logout: state => {
      state.logged = false;
    },
    toggleCart: state => {
      state.showCart = !state.showCart;
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
