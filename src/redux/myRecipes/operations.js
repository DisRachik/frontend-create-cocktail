import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMyRecipes, deleteMyRecip } from 'api';

export const fetchMyRecipes = createAsyncThunk(
  'myRecipes/fetchMyRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await getMyRecipes();
      console.log(data);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteMyRecipes = createAsyncThunk(
  'myRecipes/deleteMyRecipes',
  async (_id, thunkAPI) => {
    try {
      const { data } = await deleteMyRecip(_id);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
