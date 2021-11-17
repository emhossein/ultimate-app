import { createAsyncThunk } from '@reduxjs/toolkit';

const asyncThunk = (type, url) =>
  createAsyncThunk(type, async () => {
    return fetch(`${process.env.NEXT_PUBLIC_API_LINK}/${url}`).then(res =>
      res.json()
    );
  });

export default asyncThunk;
