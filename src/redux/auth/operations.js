import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      Notify.success('You have successfully signed up!');
      console.log(res.data);
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong! Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      console.log(res.data);
      setAuthHeader(res.data.token);
      Notify.success('Logged in successfully.');
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong! Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (token, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout', token);
      console.log(res.data);
      clearAuthHeader();
      Notify.success('You are logged out.');

      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong! Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    console.log(token);

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const res = await axios.get('/users/current');
      console.log('refreshed', res.data);
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong! Please log in again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
