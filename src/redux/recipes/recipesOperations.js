import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRecipeById } from 'api';

export const fetchRecipeById = createAsyncThunk(
  'recipes/getRecipe',
  async (id, thunkAPI) => {
    try {
      return await getRecipeById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
