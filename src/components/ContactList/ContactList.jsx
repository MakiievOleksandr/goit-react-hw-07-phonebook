import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ListItem from 'components/ListItem/ListItem';
import { getfilteredContacts } from 'redux/contacts/contacts-selectors';

import css from '../ContactList/contactList.module.css';

function ContactList({ onDeleteContact }) {
  const visible = useSelector(getfilteredContacts);
  return (
    <ul className={css.list}>
      {visible.map(contact => {
        return (
          <ListItem
            onDeleteContact={onDeleteContact}
            contact={contact}
            key={contact.id}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
