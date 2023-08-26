// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import Section from './components/Section/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <ContactList>
          <Filter />
        </ContactList>
      </Section>
    </>
  );
};

// const [contacts, setContacts] = useState(() =>
//   JSON.parse(window.localStorage.getItem('contacts') ?? []),
// );
// const [filter, setFilter] = useState('');

// useEffect(
//   () => window.localStorage.setItem('contacts', JSON.stringify(contacts)),
//   [contacts],
// );

// const addNewContact = ({ name, number }) => {
//   const newContact = {
//     id: nanoid(),
//     name,
//     number,
//   };

//   setContacts(contacts => [...contacts, newContact]);
// };

// const deleteContact = contactId => {
//   setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
// };

// const handleChangeFilter = e => {
//   setFilter(e.currentTarget.value);
// };

// const filteredContacts = () => {
//   const normalizedFilter = filter.toLowerCase().trim();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const filteredContactList = filteredContacts();
