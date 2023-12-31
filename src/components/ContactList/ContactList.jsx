import React from 'react';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ option, deleteContact }) => {
  return (
    <ul className={css.list}>
      {option.length > 0 ? (
        option.map(item => {
          return (
            <li key={item.id} className={css.listItem}>
              <p>{item.name}</p>
              <span>{item.number}</span>
              <button
                type="button"
                className={css.button}
                onClick={() => deleteContact(item.id)}
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <p>Sorry, no contacts :( </p>
      )}
    </ul>
  );
};
