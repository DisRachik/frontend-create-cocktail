// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import { addOwnRecipe } from './ownRecipesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('/pending') && action.type.includes('ownRecipes');
};

const isRejectedAction = action => {
  return (
    action.type.endsWith('/rejected') && action.type.includes('ownRecipes')
  );
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleAddOwnRecipeFulfilled = (state, action) => {
  state.error = null;
  state.items = action.payload;
  state.isLoading = false;
};

const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addOwnRecipe.fulfilled, handleAddOwnRecipeFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const ownRecipesReducer = ownRecipesSlice.reducer;
