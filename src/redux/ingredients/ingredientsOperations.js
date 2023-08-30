// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { getIngredients } from 'api';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    const { ingredients } = thunkAPI.getState();

    if (ingredients.items.length) {
      return thunkAPI.rejectWithValue(null);
    }

    try {
      return await getIngredients();
    } catch {
      return thunkAPI.rejectWithValue('Failed to load ingredients.');
    }
  }
);
