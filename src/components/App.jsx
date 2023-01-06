// import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contactsList');

  //   if (savedContacts !== null) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contactsList', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   // console.log(name, number);
  //   const searchName = contacts.find(
  //     contact => contact.name.toLowerCase().trim() === name.toLowerCase()
  //   );

  //   if (searchName) {
  //     return alert(`${name} is already in contacts`);
  //   }

  //   setContacts(prevContacts => [
  //     ...prevContacts,
  //     { id: nanoid(), name, number },
  //   ]);
  // };

  // const changeFilter = evt => {
  //   const filter = evt.target.value;
  //   setFilter(filter);
  // };

  // const getVizibleContact = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};
