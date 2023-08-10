import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  list: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.list.findIndex(
        contact => contact.id === action.payload,
      );
      state.list.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contactBook',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer,
);
