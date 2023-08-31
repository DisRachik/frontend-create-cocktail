import { createSlice } from '@reduxjs/toolkit';
import { subscripe } from 'api';

const initialState = {
  subscripe: '',
  isLoading: false,
  error: '',
};

const isPending = action => {
  return action.type.endsWith('/pending') && action.type.includes('subscribe');
};

const isRejected = action => {
  return action.type.endsWith('/rejected') && action.type.includes('subscribe');
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.subscripe = payload;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(subscripe.fulfilled, handleFulfilled)
      .addMatcher(isPending, handlePending)
      .addMatcher(isRejected, handleRejected),
});

export const subscribeReducer = subscribeSlice.reducer;
