// Libs
import { createSlice } from '@reduxjs/toolkit';
// Redux operations
import { fetchGlasses } from './glassesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.endsWith('/pending') && action.type.includes('glasses');
};

const isRejectedAction = action => {
  return action.type.endsWith('/rejected') && action.type.includes('glasses');
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleFetchGlassesFulfilled = (state, action) => {
  state.error = null;
  state.items = action.payload;
  state.isLoading = false;
};

const glassesSlice = createSlice({
  name: 'glasses',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchGlasses.fulfilled, handleFetchGlassesFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const glassesReducer = glassesSlice.reducer;
