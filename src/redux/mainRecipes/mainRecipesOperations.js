import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMainRecipes } from 'api';

export const fetchMainRecipes = createAsyncThunk(
  'mainRecipes/fetchMainRecipes',
  async (_, thunkAPI) => {
    try {
      return await getMainRecipes();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
