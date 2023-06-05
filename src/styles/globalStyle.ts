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
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #002240;
  line-height: 20px;
  min-height: 100%;}
  width: 100%;
  font-family: Open-Sans, Helvetica, Sans-Serif;
`;

export default GlobalStyle;
