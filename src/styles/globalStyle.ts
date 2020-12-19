import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    font-family: 'sans-serif', 'serif';
  }

  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }
`;
