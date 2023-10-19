import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', contact);
      Notify.success('Contact was successfully added!');
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong! Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// DELETE @ /contacts
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      Notify.success('Contact was successfully deleted!');
      return res.data;
    } catch (error) {
      Notify.failure('Something went wrong! Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// PATCH @ /contacts
// export const updateContact = createAsyncThunk(
//   'contacts/updateContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const res = await axios.patch(`/contacts/${contactId}`, { contactId });
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
