import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUserFavoriteDrinks,
  changeFavoriteStatus,
  deleteFavoriteDrink,
} from './operations';

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
      state.favoriteDrinks = [...payload];
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
    [deleteFavoriteDrink.fulfilled](state, action) {
      state.favoriteDrinks = state.favoriteDrinks.filter(
        drink => drink._id !== action.meta.arg
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
