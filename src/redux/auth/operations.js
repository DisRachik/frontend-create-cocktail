import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      toast.success('You are successfully registered😉');
      return data;
    } catch (error) {
      toast.error(
        `Hello, sorry but a user with such ${credentials.email} already exists.`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error('Oops..., something wrong, please try again😢');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');
    toast.success(`See you soon 😉`);
    clearAuthHeader();
  } catch (error) {
    toast.error('Oops..., something wrong, please try again😢');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(null);
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.patch('auth/update', userData);
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
