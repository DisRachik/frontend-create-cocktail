import { createSlice } from '@reduxjs/toolkit';
import { fetchDrinksByQuery } from './operations';

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: { drinks: [], totalPages: 0, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchDrinksByQuery.pending, (state, action) => {
        // state.drinks = [];
        state.error = null;
      })
      .addCase(fetchDrinksByQuery.fulfilled, (state, { payload }) => {
        console.log('p', payload.drinks);
        state.drinks = {
          drinks: payload.drinks,
          totalPages: payload.totalPages,
        };
        state.error = null; // Очищуємо помилки
      })
      .addCase(fetchDrinksByQuery.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const drinksReducer = drinksSlice.reducer;
