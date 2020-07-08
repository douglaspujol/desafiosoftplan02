import styled from 'styled-components';

export const Container = styled.header``;
export const Navigation = styled.nav`
  background: #0063b1;
  height: 48px;
  width: 100%;
  padding: 12px 17px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    strong {
      font-size: 18px;
      color: #fff;
      font-weight: 500;
    }
    div {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #f9f9f9;
      margin-right: 21px;
    }
  }

  a:last-child {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #f9f9f9;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #0063b1;
    }
  }
`;
