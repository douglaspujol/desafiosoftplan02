import styled, { css } from 'styled-components';

export const Container = styled.form`
  width: 100%;

  display: flex;
  align-items: center;

  height: 48px;
  padding: 15px;

  > svg {
    font-size: 16px;
    margin-right: 10px;
  }
  input {
    flex: 1;
    background: transparent;
    padding: 5px;
    height: 30px;
    border: none;
  }
  button {
    display: flex;
    align-items: center;
    padding: 3px;
    background: transparent;
    border: none;
    margin-left: 5px;
    display: none;

    &:hover {
      background: #fff;
      border-radius: 2px;
    }
    svg {
      font-size: 16px;
      color: #0078d7;
    }
  }
  ${(props) =>
    props.isFocus &&
    css`
      > svg {
        display: none;
      }

      button {
        display: block;
      }

      input {
        border: 1px solid #0078d7;
      }
    `}
`;
