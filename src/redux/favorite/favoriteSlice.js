import { createSlice } from '@reduxjs/toolkit';
import { fetchUserFavoriteDrinks } from './operations';

const drinksSlice = createSlice({
  name: 'favorits',
  initialState: { favoriteDrinks: [], error: null },
  extraReducers: {
    [fetchUserFavoriteDrinks.pending](state) {
      state.favoriteDrinks = [];
      state.error = null;
    },
    [fetchUserFavoriteDrinks.fulfilled](state, { payload }) {
      state.favoriteDrinks = payload.favorites;
      // state.favoriteDrinks = [];
    },
    [fetchUserFavoriteDrinks.rejected](state, action) {
      state.favoriteDrinks = [];
      state.error = action.payload;
    },
  },
});

export const drinksReducer = drinksSlice.reducer;
