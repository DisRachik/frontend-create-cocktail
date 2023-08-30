// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { getCategories } from 'api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getCategories();
    } catch {
      return thunkAPI.rejectWithValue('Failed to load categories.');
    }
  }
);
