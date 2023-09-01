// Libs
import { createAsyncThunk } from '@reduxjs/toolkit';
// Api
import { addRecipe } from 'api';

export const addOwnRecipe = createAsyncThunk(
  'ownRecipes/addNewRecipe',
  async (newRecipe, thunkAPI) => {
    try {
      return await addRecipe(newRecipe);
    } catch {
      return thunkAPI.rejectWithValue('Failed add new recipe.');
    }
  }
);
