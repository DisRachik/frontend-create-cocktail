// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import { fetchIngredients } from './ingredientsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// 'auth/signout/fulfilled'

const isSingOutAction = action => {
  return action.type.endsWith('/fulfilled') && action.type.includes('signout');
};

const handleSingOut = state => {
  state.items = [];
  state.isLoading = false;
  state.error = null;
};

const isPendingAction = action => {
  return (
    action.type.endsWith('/pending') && action.type.includes('ingredients')
  );
};

const isRejectedAction = action => {
  return (
    action.type.endsWith('/rejected') && action.type.includes('ingredients')
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

const handleFetchIngredientsFulfilled = (state, action) => {
  state.error = null;
  state.items = action.payload;
  state.isLoading = false;
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchIngredients.fulfilled, handleFetchIngredientsFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected)
      .addMatcher(isSingOutAction, handleSingOut);
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
