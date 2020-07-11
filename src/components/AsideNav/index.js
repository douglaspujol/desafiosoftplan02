import React from 'react';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import { useSelector, useDispatch } from 'react-redux';
import Etiquetas from './Etiquetas/index';
import { Aside, Button, Categorias, Feitos } from './styles';
import { filtroTodos } from '../../store/modules/cards/actions';

function AsideNav() {
  const cards = useSelector((state) => state.cards.cardList);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(filtroTodos());
  }
  return (
    <Aside>
      <Categorias>
        <Button>Processos</Button>
        <button onClick={() => handleClick()} type="button" className="total">
          <div>
            <BookmarksOutlinedIcon />
            Todos Processos
          </div>
          <span> {cards.length} </span>
        </button>
        <Etiquetas />
      </Categorias>
      <Feitos>Feitos</Feitos>
    </Aside>
  );
}

export default AsideNav;
