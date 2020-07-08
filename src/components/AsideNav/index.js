import React from 'react';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import Etiquetas from './Etiquetas/index';
import { Aside, Button, Categorias, Feitos } from './styles';

function AsideNav() {
  return (
    <Aside>
      <Categorias>
        <Button>Processos</Button>
        <button type="button" className="total">
          <div>
            <BookmarksOutlinedIcon />
            Todos Processos
          </div>
          <span> 5 </span>
        </button>
        <Etiquetas />
      </Categorias>
      <Feitos>Feitos</Feitos>
    </Aside>
  );
}

export default AsideNav;
