import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
#root{
    height: 100vh;
  font-family: Open-Sans, Helvetica, Sans-Serif;
    
}
html{
  height: 100%;
}

body {
  background-color: #002240;
  /* line-height: 28px; */
  min-height: 100%;}
  font-family: Open-Sans, Helvetica, Sans-Serif;

`;

export default GlobalStyle;
