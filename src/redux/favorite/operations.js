import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToFavorites,
  deleteFavorites,
  getFavorites,
  updateFavoriteStatus,
} from 'api';

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

export const deleteFavoriteDrink = createAsyncThunk(
  'favorite/deleteFavorite',
  async (id, thunkAPI) => {
    try {
      return await deleteFavorites(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addToFavoriteDrink = createAsyncThunk(
  'favorite/addFavorite',
  async (id, thunkAPI) => {
    try {
      return await addToFavorites(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
