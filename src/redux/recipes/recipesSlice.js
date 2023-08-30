// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const isPendingAction = action => {
//   return action.type.endsWith('/pending') && action.type.includes('recipes');
// };

// const isRejectedAction = action => {
//   return action.type.endsWith('/rejected') && action.type.includes('recipes');
// };

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.error = action.payload;
//   state.isLoading = false;
// };

// const recipesSlice = createSlice({
//   name: 'recipes',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase()
//       .addMatcher(isPendingAction, handlePending)
//       .addMatcher(isRejectedAction, handleRejected);
//   },
// });

// export const recipesReducer = recipesSlice.reducer;
