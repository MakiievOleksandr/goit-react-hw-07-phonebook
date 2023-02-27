import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { useState } from 'react';
import css from '../ContactForm/contact.module.css';
import initialState from './initialState';

const ContactForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState(prevState => {
      return { ...prevState, [name]: value, id: nanoid() };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...formState });
    setFormState({ ...initialState });
  };

  const { name, number } = formState;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className={css.input}
        />
      </label>
      {name && (
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      )}
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
