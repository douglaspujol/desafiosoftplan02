import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Etiqueta, ListEtiquetas, List } from './styles';
import { filtro } from '../../../store/modules/cards/actions';

import Form from '../../Form';

export default function Etiquetas() {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.tagList);
  const cards = useSelector((state) => state.cards.cardList);

  function calc(id) {
    const teste = cards.filter((e) => e.tags.some((tag) => tag.id === id));
    return teste.length;
  }

  function handleClick(id) {
    dispatch(filtro(id));
  }
  return (
    <>
      <Etiqueta type="button" className="etiquetas">
        Etiquetas
      </Etiqueta>

      <ListEtiquetas>
        {tags.map((tag) => (
          <List key={tag.id} divColor={tag.background}>
            <button type="button" onClick={() => handleClick(tag.id)}>
              <div>
                <div className="color" />
                <p>{tag.name}</p>
              </div>

              <span>{`${calc(tag.id)}`}</span>
            </button>
          </List>
        ))}
      </ListEtiquetas>
      <Form />
    </>
  );
}
