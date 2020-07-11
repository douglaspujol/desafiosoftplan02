import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 1085px;
  background: #fff;
  margin-bottom: 10px;
  padding: 24px 26px;
  display: flex;
  align-items: center;
  max-width: 1085px;
`;

export const Wrapper = styled.div`
  width: 500px;
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
`;
export const Tags = styled.ul`
  display: flex;
  align-items: flex-start;
`;

export const Tag = styled.li`
  background: ${(props) => props.tagColor || '  #20bbd3'};
  padding: 2px 5px;
  border-radius: 2px;
  max-width: 150px;
  color: #fff;
  margin-right: 10px;
`;
