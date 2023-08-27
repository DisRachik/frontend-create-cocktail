import { createSlice } from '@reduxjs/toolkit';
import { subscripe } from 'api';

const initialState = {
  subscription: '',
  error: null,
};

const isPending = action => {
  action.type.endsWith('/pending') && action.type.includes('auth');
};

const handlePending = state => {
  state.error = null;
};

const isRejected = action => {
  action.type.endsWith('/rejected') && action.type.includes('auth');
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const handleFulfilledSubscribe = (state, { payload }) => {
  state.subscription = payload.subscription;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(subscripe.fulfilled, handleFulfilledSubscribe)
      .addMatcher(isPending, handlePending)
      .addMatcher(isRejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
