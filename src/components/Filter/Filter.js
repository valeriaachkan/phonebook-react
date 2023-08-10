import React from 'react';
import propTypes from 'prop-types';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <div className={s.filter}>
      <svg
        className={s.icon}
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.71747 11.4349C6.95167 11.4349 8.10409 11.0335 9.04089 10.3643L12.5651 13.8885C12.7286 14.052 12.9442 14.1338 13.1673 14.1338C13.6506 14.1338 14 13.7621 14 13.2862C14 13.0632 13.9257 12.855 13.7621 12.6915L10.2602 9.18216C10.9963 8.21561 11.4349 7.01859 11.4349 5.71747C11.4349 2.57249 8.86245 0 5.71747 0C2.56506 0 0 2.57249 0 5.71747C0 8.86245 2.56506 11.4349 5.71747 11.4349ZM5.71747 10.2007C3.25651 10.2007 1.2342 8.171 1.2342 5.71747C1.2342 3.26394 3.25651 1.2342 5.71747 1.2342C8.171 1.2342 10.2007 3.26394 10.2007 5.71747C10.2007 8.171 8.171 10.2007 5.71747 10.2007Z"
          fill="#8E8E93"
        />
      </svg>
      <label>
        <input
          type="text"
          className={s.input}
          value={filter}
          onChange={handleChange}
          placeholder="Find contacts by name"></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};

export default Filter;
