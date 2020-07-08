import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 30px;
  background: #f9f9f9;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  svg {
    color: #707070;
    margin-right: 8px;
  }
  input {
    border: none;
    background: transparent;
    height: 100%;
    width: 300px;
    padding: 2px 0;
    font-size: 16px;
    color: #80808080;
    &::placeholder {
      font-size: 16px;
      color: #80808080;
    }
  }
`;
