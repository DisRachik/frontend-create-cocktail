// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { getCategories } from 'api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    const { categories } = thunkAPI.getState();

    if (categories.items.length) {
      return thunkAPI.rejectWithValue(null);
    }

    try {
      return await getCategories();
    } catch {
      return thunkAPI.rejectWithValue('Failed to load categories.');
    }
  }
);
