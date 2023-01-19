
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --red: #9F2241;
  --dark-red: #691C32;
  --green: #235B4E;
  --dark-green: #10312B;
  --yellow: #DDC9A3;
  --dark-yellow: #BC955C;
  --grey: #98989A;
  --dark-grey: #6F7271;
  --wine: rgb(78, 35, 46);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  body {
    font-family: Montserrat, Helvetica, Sans-Serif;
    line-height: 1.428;
  }
`

  export default GlobalStyles
