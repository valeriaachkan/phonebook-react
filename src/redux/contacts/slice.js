import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleError,
    [fetchContacts.fulfilled](state, action) {
      state.list = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleError,
    [addContact.fulfilled](state, action) {
      state.list.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleError,
    [deleteContact.fulfilled](state, action) {
      const index = state.list.findIndex(
        contact => contact.id === action.payload.id,
      );
      state.list.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
