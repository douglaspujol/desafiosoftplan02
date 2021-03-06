import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Scroll = styled(PerfectScrollbar)`
  margin: 20px 0;
  height: 90%;
`;

export const Container = styled.div`
  display: flex;
  background: #eaeaea;
  width: 100%;
  height: calc(100% - 48px);
`;
export const Main = styled.main`
  width: 100%;
`;
export const Cards = styled.div`
  max-height: auto;
  margin: 0 0 0 33px;
`;
