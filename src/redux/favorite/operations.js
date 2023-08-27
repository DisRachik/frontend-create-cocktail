import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFavorites } from 'api';

export const fatchUserFavoritsDrinks = createAsyncThunk(
  'drinks/fetchFavorite',
  async (id, thunkAPI) => {
    try {
      return await getFavorites(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
