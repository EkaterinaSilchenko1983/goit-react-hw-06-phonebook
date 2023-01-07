// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ButtonDelete, ContactItem, List } from './ContactList.styled';
import { stateContacts } from '../../redux/contactsSlice';
import { stateFilters } from 'redux/filtersSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(stateFilters);
  const contacts = useSelector(stateContacts);
  console.log(contacts);

  const getVizibleContact = () => {
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };
  const vizibleContact = getVizibleContact();
  console.log(vizibleContact);

  return (
    <List>
      {vizibleContact.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ButtonDelete>
        </ContactItem>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
