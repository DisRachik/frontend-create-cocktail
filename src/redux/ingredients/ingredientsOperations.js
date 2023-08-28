// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { getIngredients } from 'api';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await getIngredients();
    } catch {
      return thunkAPI.rejectWithValue('Failed to load ingredients.');
    }
  }
);
