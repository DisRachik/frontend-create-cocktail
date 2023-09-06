// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import { fetchCategories } from './categoriesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isSingOutAction = action => {
  return action.type.endsWith('/fulfilled') && action.type.includes('signout');
};

const handleSingOut = state => {
  state.items = [];
  state.isLoading = false;
  state.error = null;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending') && action.type.includes('categories');
};

const isRejectedAction = action => {
  return (
    action.type.endsWith('/rejected') && action.type.includes('categories')
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

const handleFetchCategoriesFulfilled = (state, action) => {
  state.error = null;
  state.items = action.payload;
  state.isLoading = false;
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, handleFetchCategoriesFulfilled)
      .addMatcher(isSingOutAction, handleSingOut)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const categoriesReducer = categoriesSlice.reducer;
