import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { useState } from 'react';
import css from '../ContactForm/contact.module.css';
import initialState from './initialState';

const ContactForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({ ...initialState });
  const [toggle, setToggle] = useState(false);

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
    setToggle(false);
  };

  const handleAddFields = evt => {
    evt.preventDefault();
    setToggle(!toggle);
  };

  const { name, number, email } = formState;

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
      {toggle && (
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input}
          />
        </label>
      )}
      <div className={css.buttonsWrapper}>
        <button className={css.additionalBtn} onClick={handleAddFields}>
          Additional fields
        </button>
        {name && (
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
