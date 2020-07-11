import React, { useState } from 'react';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { useDispatch } from 'react-redux';
import { addTagToList } from '../../store/modules/tags/actions';

import { Container } from './styles';

export default function Form() {
  const [focus, setFocus] = useState(false);

  const [valueInput, setValueInput] = useState('');
  const dispatch = useDispatch();

  function handleInputChange(string) {
    const { value } = string.target;
    setValueInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTag = {
      id: valueInput,
      name: valueInput,
      background: '#0078d7',
    };
    dispatch(addTagToList(newTag));
    setValueInput('');
    setFocus(false);
  }

  return (
    <Container
      isFocus={focus}
      onSubmit={handleSubmit}
      onClick={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <LabelOutlinedIcon />
      <input
        value={valueInput}
        placeholder="Criar Etiqueta"
        type="text"
        onChange={handleInputChange}
      />

      <button type="submit">
        <CheckOutlinedIcon />
      </button>
    </Container>
  );
}
