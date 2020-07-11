import React from 'react';
import { useSelector } from 'react-redux';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import DropDown from './DropDown/index';

import {
  Container,
  Infos,
  Procedimento,
  InformacoesAdicionais,
  Actions,
  Wrapper,
  Tags,
  Tag,
} from './styles';

export default function Card() {
  const filtrado = useSelector((state) => state.cards.filtro);

  const cardList = useSelector((state) => state.cards.cardList);

  return (
    <>
      {(filtrado.length > 0 ? filtrado : cardList).map((card) => (
        <Container key={card.id}>
          <Wrapper>
            <Infos>
              <div className="name">
                <AddCircleIcon />
                <p>{card.partes.ativa.name}</p>
                <strong>+2</strong>
              </div>
              <div className="plano">
                <RemoveCircleIcon />
                <p>Unimed</p>
              </div>
            </Infos>

            <Procedimento>
              <span>{card.classe} - </span>
              <strong>{card.assunto}</strong>
            </Procedimento>

            <InformacoesAdicionais>
              <p>{card.numero}</p>
            </InformacoesAdicionais>
          </Wrapper>
          <Actions>
            <div className="abrirPasta">
              <button type="button">
                <FolderOpenOutlinedIcon />
                <span>Abrir Pasta</span>
              </button>
            </div>
            <DropDown id={card.id} />
          </Actions>
          <Tags>
            {card.tags.map((tag) => (
              <Tag key={tag.id} tagColor={tag.background}>
                {tag.name}
              </Tag>
            ))}
          </Tags>
        </Container>
      ))}
    </>
  );
}
