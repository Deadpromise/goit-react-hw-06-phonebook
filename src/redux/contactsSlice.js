import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        const chekClone = state.find(
          item =>
            item.name === action.payload.name ||
            item.number === action.payload.number
        );
        if (chekClone) {
          alert(
            `User with name ${action.payload.name} or number ${action.payload.number} is already in contacts`
          );
          return state;
        }
        state.push(action.payload);
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
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact } = contactsSlice.actions;

//   const addContact = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     setContacts(() => {
//       const chekClone = contacts.find(
//         item => item.name === contact.name || item.number === contact.number
//       );
//       if (chekClone) {
//         alert(
//           `User with name ${contact.name} or number ${contact.number} is already in contacts`
//         );
//         return contacts;
//       }
//       return [contact, ...contacts];
//     });
//   };
