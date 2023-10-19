import React from 'react';
import propTypes from 'prop-types';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { Box, List, ListItem, ListDivider } from '@mui/joy';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    const filteredContactsList = [
      ...contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
      ),
    ];

    return filteredContactsList;
  };

  const filteredContactList = filteredContacts();

  return (
    <Box>
      <List size="lg">
        {filteredContactList.map(contact => (
          <>
            <ListItem key={contact.id}>
              <ContactItem contact={contact} />
            </ListItem>
            <ListDivider inset="gutter" />
          </>
        ))}
      </List>
    </Box>
  );
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactList;
