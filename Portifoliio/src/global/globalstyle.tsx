import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    padding: 20px;
    @media screen and (max-width: 768px) {
      padding: 10px;
    }
    background-color: black; 
    color: white; 
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
