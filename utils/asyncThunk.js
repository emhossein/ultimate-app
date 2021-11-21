import { createAsyncThunk } from '@reduxjs/toolkit';

const asyncThunk = (type, url) =>
  createAsyncThunk(type, async () => {
    const absoluteUrl = `${process.env.NEXT_PUBLIC_API_LINK}/${url}`;
    return new Promise(async resolve => {
      const response = await fetch(absoluteUrl, params);
      resolve(await response.json());
    });
  });

export default asyncThunk;
