import React from 'react';
import propTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      <ContactItem contacts={contacts} onDelete={onDelete} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactList;
