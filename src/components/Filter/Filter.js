
import { useDispatch, useSelector } from 'react-redux';
import { InputFilter, LabelFilter } from './Filter.styled';
import { setFilterContact, stateFilters } from 'redux/filtersSlice';


export const Filter = () => {
  const filter = useSelector(stateFilters);
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


