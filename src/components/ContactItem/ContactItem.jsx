import { ContactLi } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <ContactLi>
      <span>{name}</span>:<span>{number}</span>
      <button type="button" onClick={onDelete}>
        DELETE
      </button>
    </ContactLi>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
export default ContactItem;
