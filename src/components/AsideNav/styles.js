import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100%;
  min-width: 220px;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Categorias = styled.div`
  button.total {
    height: 38px;
    width: 100%;
    border: none;
    border-left: 3px solid #0078d7;
    font-size: 14px;
    padding: 15px;
    text-align: left;
    font-weight: 500;
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

      svg {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }
`;

export const Feitos = styled.button`
  height: 48px;
  width: 100%;
  border: none;
  font-size: 12px;
  padding: 14px;
  text-align: left;
  font-weight: 700;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  color: #808080;
  border-top: 1px solid #d8d8d8;
  &:hover {
    background: #eaeaea;
  }
`;

export const Button = styled.button`
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
