// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { getGlasses } from 'api';

export const fetchGlasses = createAsyncThunk(
  'glasses/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getGlasses();
    } catch {
      return thunkAPI.rejectWithValue('Failed to load glasses.');
    }
  }
);
