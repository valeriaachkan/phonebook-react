import React from 'react';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactItem = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id} className={s.item}>
      <svg
        className={s.avatar}
        fill="#ffffff"
        width="30px"
        height="30px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
      </svg>
      <div>
        <p>{name}</p>
        <span className={s.number}>{number}</span>
      </div>
      <button type="button" className={s.button} onClick={() => onDelete(id)}>
        <svg
          width="20px"
          height="20px"
          viewBox="-0.5 0 19 19"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z"
            id="path"
            fill="#8E8E93"></path>
        </svg>
      </button>
    </li>
  ));
};

ContactItem.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDelete: propTypes.func,
};

export default ContactItem;
