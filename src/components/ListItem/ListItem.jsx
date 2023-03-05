import PropTypes from 'prop-types';
import css from '../ListItem/listItem.module.css';

function ListItem({ onDeleteContact, contact }) {
  return (
    <li className={css.listItem}>
      <p className={css.text}>
        {contact.name}
        {': '}
        {contact.phone}
      </p>
      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className={css.btn}
      >
        Delete
      </button>
    </li>
  );
}

export default ListItem;

ListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
