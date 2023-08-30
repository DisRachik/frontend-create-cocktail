import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMainRecipes } from 'api';

export const fetchMainRecipes = createAsyncThunk(
  'mainRecipes/fetchMainRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await getMainRecipes();
      console.log(data);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
