import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const inputValue = e.currentTarget.value;
    dispatch(setFilter(inputValue));
  };
  return (
    <label>
      Filter
      <input type="text" onChange={onChange} />
    </label>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
export default Filter;
