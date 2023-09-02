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
        state.drinks = {
          drinks: payload.filter, // Оновлюємо дані про коктейлі
          totalPages: payload.totalPages, // Оновлюємо загальну кількість сторінок
        };

        state.error = null; // Очищуємо помилки
        // state.drinks.drinks = payload.filter;
        // state.drinks.totalPages = payload.totalPages;
        // state.state.error = null;
        // console.log('payload', payload.filter);
      })
      .addCase(fetchDrinksByQuery.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const drinksReducer = drinksSlice.reducer;
