import { useSelector, useDispatch } from 'react-redux';

import Section from '../Section/Secton';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import {
  getfilteredContacts,
  getContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const Contacts = () => {
  const filteredContacts = useSelector(getfilteredContacts);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAddContact = contactData => {
    if (contacts.find(item => item.name === contactData.name)) {
      alert(`${contactData.name} is already in contacts!`);
      return false;
    }
    dispatch(addContact(contactData));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    const action = setFilter('');
    dispatch(action);
  };

  const changeFilter = ({ target }) => {
    const { value } = target;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={onAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList
          onDeleteContact={onDeleteContact}
          filteredContacts={filteredContacts}
        />
      </Section>
    </>
  );
};

export default Contacts;
