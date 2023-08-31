import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFavorites, updateFavoriteStatus } from 'api';

export const fetchUserFavoriteDrinks = createAsyncThunk(
  'drinks/fetchFavorite',
  async ({ page = 1, limit = 3 }, thunkAPI) => {
    try {
      return await getFavorites(page, limit);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const changeFavoriteStatus = createAsyncThunk(
  'favorite/updateFavoriteStatus',
  async (id, thunkAPI) => {
    try {
      return await updateFavoriteStatus(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
