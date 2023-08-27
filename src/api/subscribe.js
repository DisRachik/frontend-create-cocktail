import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const subscripe = createAsyncThunk(
  '/subscribe',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('/', { email });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
