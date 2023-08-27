import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-db.onrender.com';

export const fetchMyRecipes = createAsyncThunk(
  'myRecipes/fetchMyRecipes',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      console.log(data);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getMyRecipes = async id => {
//   const res = await axios.get(`/users/${id}`);
//   console.log(res);
//   return res.data;
// };

export const deleteMyRecipes = createAsyncThunk(
  'myRecipes/deleteMyRecipes',
  async (_id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/recipes/${_id}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
