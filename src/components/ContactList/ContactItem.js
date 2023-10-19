import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  IconButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  Typography,
} from '@mui/joy';
import { Person, Delete } from '@mui/icons-material';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <ListItemDecorator>
        <Sheet
          variant="plained"
          color="neutral"
          sx={{
            width: '35px',
            height: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            boxShadow: 'sm',
            mr: '15px',
          }}>
          <Person />
        </Sheet>
      </ListItemDecorator>
      <ListItemContent>
        <Typography level="title-md">{contact.name}</Typography>
        <Typography level="body-md" noWrap>
          {contact.number}
        </Typography>
      </ListItemContent>
      <IconButton
        size="sm"
        variant="plained"
        aria-label="delete contact button"
        onClick={handleDelete}>
        <Delete />
      </IconButton>
    </>
  );
};

ContactItem.propTypes = {
  contact: propTypes.object,
  onDelete: propTypes.func,
};

export default ContactItem;
