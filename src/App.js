import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const {
      addNewContact,
      handleChangeFilter,
      filteredContacts,
      deleteContact,
    } = this;
    const { contacts, filter } = this.state;
    const filteredContactList = filteredContacts();

    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={addNewContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList contacts={filteredContactList} onDelete={deleteContact} />
      </>
    );
  }
}

export default App;
