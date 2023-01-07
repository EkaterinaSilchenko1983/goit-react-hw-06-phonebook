import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(nameText, numberText) {
        return {
          payload: {
            name: nameText,
            id: nanoid(),
            number: numberText,
          },
        };
      },
    },

    deleteContact(state, action) {
      return {
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const stateContacts = state => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
