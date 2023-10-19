import React from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/slice';
import { selectFilter } from '../../redux/contacts/selectors';
import { Input } from '@mui/joy';
import { Search } from '@mui/icons-material';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <Input
      placeholder="Find contacts by name..."
      size="lg"
      variant="soft"
      startDecorator={<Search />}
      type="text"
      value={filter}
      onChange={handleChange}></Input>
  );
};

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};

export default Filter;
