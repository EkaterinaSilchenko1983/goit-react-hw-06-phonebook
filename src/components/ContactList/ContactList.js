// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ButtonDelete, ContactItem, List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);

  const getVizibleContact = () => {
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };

  return (
    <List>
      {getVizibleContact().map(contact => (
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
