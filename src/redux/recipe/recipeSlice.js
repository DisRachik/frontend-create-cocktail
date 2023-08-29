import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipeById } from './recipeOperations';

const initialState = {
  recipe: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('/pending') && action.type.includes('recipe');
};

const isRejectedAction = action => {
  return action.type.endsWith('/rejected') && action.type.includes('recipe');
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleFetchRecipeByIdFulfilled = (state, action) => {
  state.error = null;
  state.recipe = action.payload;
  state.isLoading = false;
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipeById.fulfilled, handleFetchRecipeByIdFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const recipeReducer = recipeSlice.reducer;
