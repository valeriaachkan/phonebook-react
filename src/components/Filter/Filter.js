import React from 'react';
import propTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};

export default Filter;
