import { createSlice } from '@reduxjs/toolkit';
import { fatchUserFavoritsDrinks } from 'api';

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: { favoriteDrinks: [], error: null },
  extraReducers: {
    [fatchUserFavoritsDrinks.pending](state) {
      state.favoriteDrinks = [];
      state.error = null;
    },
    [fatchUserFavoritsDrinks.fulfilled](state, { payload }) {
      state.favoriteDrinks = payload.favorites;
    },
    [fatchUserFavoritsDrinks.rejected](state, action) {
      state.favoriteDrinks = [];
      state.error = action.payload;
    },
  },
});

export const drinksReducer = drinksSlice.reducer;
