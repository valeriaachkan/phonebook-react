import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import { Notify } from 'notiflix';

export const Form = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  console.log('contacts', contacts);

  const checkUniqueness = newName => {
    return contacts
      .map(({ name }) => name.toLowerCase())
      .includes(newName.toLowerCase())
      ? true
      : false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (checkUniqueness(name)) {
      Notify.warning(`${name} is already in contacts.`);
      form.reset();
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Sheet
      sx={{
        mx: 'auto',
        mt: '150px',
        py: '25px',
        px: '25px',
        maxWidth: '500px',
        borderRadius: 'xl',
        boxShadow: 'md',
      }}
      variant="plain">
      <Typography level="h4" sx={{ mb: '15px' }}>
        Phonebook
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack gap={1}>
          <FormControl required>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" autoComplete="off" />
          </FormControl>
          <FormControl required>
            <FormLabel>Number</FormLabel>
            <Input
              type="tel"
              name="number"
              pattern="^[0-9]*$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </FormControl>
        </Stack>
        <Stack gap={2} sx={{ mt: 3 }}>
          <Button type="submit" fullWidth>
            Add contact
          </Button>
        </Stack>
      </form>
    </Sheet>
  );
};

Form.propTypes = {
  onSubmit: propTypes.func,
  contacts: propTypes.arrayOf(propTypes.object),
};

export default Form;
