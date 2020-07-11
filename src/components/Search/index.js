import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { filtroInput } from '../../store/modules/cards/actions';

function Search() {
  const dispatch = useDispatch();

  function handleInputChange(string) {
    const { value } = string.target;

    dispatch(filtroInput(value));
  }
  return (
    <Container>
      <SearchOutlinedIcon />
      <input placeholder="Buscar" onChange={handleInputChange} />
    </Container>
  );
}

export default Search;
