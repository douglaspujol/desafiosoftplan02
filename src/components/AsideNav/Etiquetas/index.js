import React from 'react';
import { connect } from 'react-redux';
import { Etiqueta, ListEtiquetas, List } from './styles';
import Form from '../../Form';

function Etiquetas({ tags }) {
  return (
    <>
      <Etiqueta type="button" className="etiquetas">
        Etiquetas
      </Etiqueta>

      <ListEtiquetas>
        {tags.map((tag) => (
          <List key={tag.id} divColor={tag.background}>
            <button type="button">
              <div>
                <div className="color" />
                <p>{tag.name}</p>
              </div>

              <span> 0 </span>
            </button>
          </List>
        ))}
      </ListEtiquetas>
      <Form />
    </>
  );
}

const mapStateToProps = (state) => ({
  tags: state.tags,
});
export default connect(mapStateToProps)(Etiquetas);
