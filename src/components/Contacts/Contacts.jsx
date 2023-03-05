import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Section from '../Section/Secton';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getfilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const Contacts = () => {
  const filteredContacts = useSelector(getfilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = contactData => {
    dispatch(fetchAddContact(contactData));
  };

  const onDeleteContact = contactId => {
    dispatch(fetchDeleteContact(contactId));
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
      {filteredContacts.length > 0 && (
        <Section title="Contacts">
          <Filter filter={filter} onChangeFilter={changeFilter} />
          <ContactList
            onDeleteContact={onDeleteContact}
            filteredContacts={filteredContacts}
          />
        </Section>
      )}
    </>
  );
};

export default Contacts;
