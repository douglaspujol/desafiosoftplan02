import styled from 'styled-components';

export const Etiqueta = styled.button`
  height: 48px;
  width: 100%;
  border: none;
  font-size: 12px;
  padding: 14px;
  text-align: left;
  font-weight: 500;
  background: #f4f4f4;

  color: #808080;

  display: flex;
  align-items: center;

  &:hover {
    background: #eaeaea;
  }
`;
export const ListEtiquetas = styled.ul`
  width: 100%;
`;
export const List = styled.li`
  width: 100%;

  button {
    height: 48px;
    width: 100%;
    border: none;
    font-size: 12px;
    padding: 15px;
    text-align: left;
    background: #f4f4f4;

    color: #808080;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background: #eaeaea;
    }

    div {
      display: flex;
      align-items: center;
    }
    div.color {
      background: ${(props) => props.divColor || '#275ba7'};
      width: 16px;
      height: 6px;
      margin-right: 10px;
    }
  }
`;
