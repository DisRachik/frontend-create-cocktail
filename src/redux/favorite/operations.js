import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToFavorites,
  deleteFromFavorites,
  getFavorites,
} from 'api';

export const fetchUserFavoriteDrinks = createAsyncThunk(
  'drinks/fetchFavorite',
  async (_, thunkAPI) => {
    try {
      return await getFavorites();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteFavoriteDrink = createAsyncThunk(
  'favorite/deleteFavorite',
  async (id, thunkAPI) => {
    try {
      return await deleteFromFavorites(id);
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
