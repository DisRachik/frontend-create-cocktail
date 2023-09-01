import { createSlice } from '@reduxjs/toolkit';
import { fetchMainRecipes } from 'redux/mainRecipes/mainRecipesOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const mainRecipesSlice = createSlice({
  name: 'mainRecipes',
  initialState: {
    mainRecipes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMainRecipes.pending, handlePending)
      .addCase(fetchMainRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.mainRecipes = action.payload;
      })
      .addCase(fetchMainRecipes.rejected, handleRejected);
  },
});

export const mainRecipesReduser = mainRecipesSlice.reducer;
