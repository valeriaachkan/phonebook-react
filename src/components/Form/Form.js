import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import s from './Form.module.css';

function Form({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkUniqueness = () => {
    const newName = name.toLowerCase();
    return contacts
      .map(({ name }) => name.toLowerCase() === newName)
      .includes(true)
      ? false
      : true;
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!checkUniqueness()) {
      alert(`${name} is already in contacts.`);
      resetForm();
      return;
    }

    onSubmit({ name, number });
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
        name
        <input
          type="text"
          name="name"
          className={s.input}
          value={name}
          id={nameInputId}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label} htmlFor={numberInputId}>
        number
        <input
          type="tel"
          name="number"
          className={s.input}
          value={number}
          id={numberInputId}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: propTypes.func,
  contacts: propTypes.arrayOf(propTypes.object),
};

export default Form;
