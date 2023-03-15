import React from 'react';
import propTypes from 'prop-types';

const ContactItem = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      <p>{name}:</p>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  ));
};

ContactItem.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactItem;
