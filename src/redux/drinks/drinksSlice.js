import { createSlice } from '@reduxjs/toolkit';
import { fetchDrinksByQuery } from './operations';

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: { drinks: [], error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchDrinksByQuery.pending, (state, { payload }) => {
        // state.drinks = [];
        state.error = null;
      })
      .addCase(fetchDrinksByQuery.fulfilled, (state, { payload }) => {
        state.drinks = payload;
        state.error = null;
      })
      .addCase(fetchDrinksByQuery.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const drinksReducer = drinksSlice.reducer;
