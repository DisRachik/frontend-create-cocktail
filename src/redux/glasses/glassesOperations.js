// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { getGlasses } from 'api';

export const fetchGlasses = createAsyncThunk(
  'glasses/fetchAll',
  async (_, thunkAPI) => {
    const { glasses } = thunkAPI.getState();

    if (glasses.items.length) {
      return thunkAPI.rejectWithValue(null);
    }

    try {
      return await getGlasses();
    } catch {
      return thunkAPI.rejectWithValue('Failed to load glasses.');
    }
  }
);
