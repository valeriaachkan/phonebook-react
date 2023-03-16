import React from 'react';
import propTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete, children }) => {
  return (
    <div className={s.contacts}>
      {children}
      <ul className={s.list}>
        <ContactItem contacts={contacts} onDelete={onDelete} />
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactList;
