import { createSlice } from '@reduxjs/toolkit';
import { fetchUserFavoriteDrinks } from './operations';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteDrinks: [],
    totalHits: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUserFavoriteDrinks.pending](state) {
      state.isLoading = true;
      state.favoriteDrinks = [];
      state.error = null;
    },
    [fetchUserFavoriteDrinks.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.favoriteDrinks = [...payload.favorites];
      state.totalHits = payload.totalHits;
    },
    [fetchUserFavoriteDrinks.rejected](state, action) {
      state.isLoading = false;
      state.favoriteDrinks = [];
      state.error = action.payload;
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
