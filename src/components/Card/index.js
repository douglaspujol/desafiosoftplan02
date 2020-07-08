import React, { useState } from 'react';

import Collapse from '@material-ui/core/Collapse';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { connect } from 'react-redux';

import {
  Container,
  Infos,
  Procedimento,
  InformacoesAdicionais,
  Actions,
  Wrapper,
  Button,
} from './styles';

function Card({ tags }) {
  const [cheked, setCheked] = useState(false);

  function handleFocus() {
    if (!cheked) {
      setCheked(true);
    }
  }

  function handleBlur() {
    if (cheked) {
      setCheked(false);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Infos>
          <div className="name">
            <AddCircleIcon />
            <p>Reinaldo</p>
            <strong>+2</strong>
          </div>
          <div className="plano">
            <RemoveCircleIcon />
            <p>Unimed</p>
          </div>
        </Infos>

        <Procedimento>
          <span>Procedimento Comum - </span>
          <strong>Requirimento de Reintegração de Posse</strong>
        </Procedimento>

        <InformacoesAdicionais>
          <p>27/12/2018 </p>
          <span>User Interface</span>
          <span>Estatuto Idoso</span>
        </InformacoesAdicionais>
      </Wrapper>

      <Actions>
        <div className="abrirPasta">
          <button type="button">
            <FolderOpenOutlinedIcon />
            <span>Abrir Pasta</span>
          </button>
        </div>

        <div>
          <button
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            type="button"
            className="menuDropDown"
          >
            <LabelOutlinedIcon />
          </button>
          <Collapse in={cheked}>
            <div className="options">
              <p>Etiquetar como:</p>
              {tags.map((tag) => (
                <Button
                  key={tag.id}
                  type="button"
                  className="tags"
                  buttonColor={tag.background}
                >
                  {tag.name}
                </Button>
              ))}
            </div>
          </Collapse>
        </div>
      </Actions>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  tags: state.tags,
});
export default connect(mapStateToProps)(Card);
