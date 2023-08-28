import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMyRecipes = createAsyncThunk(
  'myRecipes/fetchMyRecipes',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.getMyRecipes(id);
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
      const { data } = await axios.deleteMyRecipes(_id);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
