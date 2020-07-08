import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Container } from './styles';

function Search() {
  return (
    <Container>
      <SearchOutlinedIcon />
      <input placeholder="Buscar" />
    </Container>
  );
}

export default Search;
