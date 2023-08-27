import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fatchUserFavoritsDrinks = createAsyncThunk(
  'drinks/fetchFavorite',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/users/${id}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
