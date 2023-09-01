import { createSlice } from '@reduxjs/toolkit';
import { fetchUserFavoriteDrinks, changeFavoriteStatus } from './operations';

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
      state.favoriteDrinks = [...payload.favorites];
      state.totalHits = payload.totalHits;
    },
    [fetchUserFavoriteDrinks.rejected](state, action) {
      state.isLoading = false;
      state.favoriteDrinks = [];
      state.error = action.payload;
    },
    [changeFavoriteStatus.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [changeFavoriteStatus.fulfilled](state) {
      state.isLoading = false;
    },
    [changeFavoriteStatus.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
