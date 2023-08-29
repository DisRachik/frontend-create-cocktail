import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRecipeById } from 'api';

export const fetchRecipeById = createAsyncThunk(
  'recipe/getRecipe',
  async (id, thunkAPI) => {
    try {
      return await getRecipeById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
