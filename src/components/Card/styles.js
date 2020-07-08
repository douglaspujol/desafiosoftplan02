import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 1085px;
  background: #fff;
  margin-bottom: 10px;
  padding: 24px 26px;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  div.name {
    display: flex;
    align-items: center;
    margin-right: 12px;

    svg {
      color: #01ae76;
      font-size: 10px;
      margin-right: 4px;
    }
  }
  div.plano {
    display: flex;
    align-items: center;
    svg {
      color: #ff5766;
      font-size: 10px;
      margin-right: 4px;
    }
  }
`;

export const Procedimento = styled.div`
  font-size: 16px;
  margin: 3px 0;
  strong {
    font-weight: 500;
  }
`;

export const InformacoesAdicionais = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin-right: 7px;
  }
  span {
    background: #f4f4f4;
    border-radius: 10px;
    font-size: 11px;
    padding: 0 10px;
    margin-right: 4px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  div.abrirPasta {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    margin-left: 60px;

    border-right: 1px solid #e7e7e7;
    border-left: 1px solid #e7e7e7;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      svg {
        font-size: 16px;
        margin-right: 11px;
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    margin-left: 30px;
    button.menuDropDown {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      svg {
        font-size: 16px;
        margin-right: 11px;
      }
    }
    div {
      margin: 0;
      position: absolute;
      top: 5px;
      left: 0;
      z-index: 1;
    }

    div.options {
      display: flex;
      flex-direction: column;
      background: #ffffff;

      align-items: flex-start;
      width: 186px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);

      padding: 10px 10px 16px 10px;
      p {
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 25px;
  width: 167px;

  font-size: 12px;
  color: #ffffff;
  padding: 5px;
  background: ${(props) => props.buttonColor || ' #01ae76'};
`;
