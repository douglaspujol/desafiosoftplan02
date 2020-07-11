import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root {
    height:100%;

  }

  body {
    -webkit-font-smoothing: antialiased;
    color:#808080;
  }

  body, input, button{
    font:12px 'Segoe UI', sans-serif;
    color:#808080;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
