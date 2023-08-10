import React from 'react';
import propTypes from 'prop-types';
import { getContacts, getFilter } from '../../redux/selectors';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

function ContactList({ children }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContactList = filteredContacts();

  return (
    <div className={s.contacts}>
      {children}
      <ul className={s.list}>
        {filteredContactList.map(contact => (
          <li key={contact.id} className={s.item}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactList;
