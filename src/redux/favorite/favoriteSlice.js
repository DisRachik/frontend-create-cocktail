import { createSlice } from '@reduxjs/toolkit';
import { fetchUserFavoriteDrinks } from './operations';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { favoriteDrinks: [], error: null },
  extraReducers: {
    [fetchUserFavoriteDrinks.pending](state) {
      state.favoriteDrinks = [];
      state.error = null;
    },
    [fetchUserFavoriteDrinks.fulfilled](state, { payload }) {
      state.favoriteDrinks = payload;
    },
    [fetchUserFavoriteDrinks.rejected](state, action) {
      state.favoriteDrinks = [];
      state.error = action.payload;
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
