import { createSlice } from '@reduxjs/toolkit';
import { deleteMyRecipes, fetchMyRecipes } from 'redux/myRecipes/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState: {
    myRecipes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMyRecipes.pending, handlePending)
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.myRecipes = action.payload;
      })
      .addCase(fetchMyRecipes.rejected, handleRejected)

      .addCase(deleteMyRecipes.pending, handlePending)
      .addCase(deleteMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.myRecipes = state.myRecipes.filter(
          recipt => recipt._id !== action.payload
        );
      })
      .addCase(deleteMyRecipes.rejected, handleRejected);
  },
});

export const myRecipesReduser = myRecipesSlice.reducer;
