import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, refreshUser, updateUser } from './operations';

const initialState = {
  user: { name: null, email: null, avatarURL: '', _id: null, tokenCount: null },
  token: null,
  isAuth: false,
  isRefreshing: true,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    resetTokenCount: state => {
      state.user.tokenCount = null;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
        state.tokenCount = payload.tokenCount;
      })
      .addCase(signOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          _id: null,
          tokenCount: null,
          avatarURL: '',
        };
        state.token = null;
        state.isAuth = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isLoading = false;
      }),
});

export const { resetTokenCount } = authSlice.actions;

export const authReducer = authSlice.reducer;
