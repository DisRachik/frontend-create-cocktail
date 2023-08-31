import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrinks } from 'api';

export const fetchDrinksByQuery = createAsyncThunk(
  'search/get',
  async (query, thunkAPI) => {
    try {
      return await getDrinks(query);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
