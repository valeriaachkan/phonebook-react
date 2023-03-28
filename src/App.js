import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './components/Section/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
        <Section title={'Phonebook'}>
          <Form onSubmit={addNewContact} contacts={contacts} />
        </Section>
        <Section title={'Contacts'}>
          <ContactList contacts={filteredContactList} onDelete={deleteContact}>
            <Filter value={filter} onChange={handleChangeFilter} />
          </ContactList>
        </Section>
      </>
    );
  }
}

export default App;
