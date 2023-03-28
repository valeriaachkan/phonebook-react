import React from 'react';
import propTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete, children }) => {
  return (
    <div className={s.contacts}>
      {children}
      <ul className={s.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactList;
