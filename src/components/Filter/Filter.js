// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { InputFilter, LabelFilter } from './Filter.styled';
import { setFilterContact } from 'redux/filtersSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    const value = event.target.value.toLowerCase().trim();
    dispatch(setFilterContact(value));
  };
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter type="text" value={filter} onChange={changeFilter} />
    </LabelFilter>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
