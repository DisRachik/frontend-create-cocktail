import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipeById } from './recipesOperations';

const initialState = {
  items: [],
  recipe: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('/pending') && action.type.includes('recipes');
};

const isRejectedAction = action => {
  return action.type.endsWith('/rejected') && action.type.includes('recipes');
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

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipeById.fulfilled, handleFetchRecipeByIdFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
