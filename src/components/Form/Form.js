import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

const initialState = {
  name: '',
  number: '',
};

class Form extends Component {
  static propTypes = {
    onSubmit: propTypes.func,
    contacts: propTypes.arrayOf(propTypes.object),
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const value = e.currentTarget.name;
    this.setState({ [value]: e.currentTarget.value });
  };

  checkUniqueness = () => {
    const newName = this.state.name.toLowerCase();
    return this.props.contacts
      .map(({ name }) => name.toLowerCase() === newName)
      .includes(true)
      ? false
      : true;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.checkUniqueness()) {
      alert(`${this.state.name} is already in contacts.`);
      this.setState({ ...initialState });
      return;
    }

    this.props.onSubmit(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { handleSubmit, handleChange, nameInputId, numberInputId } = this;
    const { name, number } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            id={numberInputId}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
