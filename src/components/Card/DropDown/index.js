import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { addTagToCard } from '../../../store/modules/cards/actions';

import { MenuDropDown, Button, Container } from './styles';

export default function DropDown(props) {
  const { id } = props;
  const tags = useSelector((state) => state.tags.tagList);
  const dispatch = useDispatch();

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

  function handleClick(idTag) {
    const getTag = tags.find((tag) => tag.id === idTag);

    dispatch(addTagToCard(getTag, id));
  }

  function tagsLength() {
    return tags.length > 0;
  }

  return (
    <>
      <MenuDropDown
        tagsLength={tagsLength()}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        type="button"
      >
        <LabelOutlinedIcon />
      </MenuDropDown>

      <Container>
        <Collapse in={cheked} styles>
          <div className="options">
            <p>Etiquetar como:</p>

            {tags.map((tag) => (
              <Button
                onClick={() => handleClick(tag.id)}
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
      </Container>
    </>
  );
}
