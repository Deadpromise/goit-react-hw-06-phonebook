import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          // onDelete={onDelete}
        ></ContactItem>
      ))}
    </ul>
  );
};

// const ContactList = ({ contacts, onDelete }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <ContactItem
//         key={id}
//         id={id}
//         name={name}
//         number={number}
//         onDelete={onDelete}
//       ></ContactItem>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
