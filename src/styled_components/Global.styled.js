import {createGlobalStyle} from "styled-components"
export const GlobalStyled =createGlobalStyle`

@font-face {
  font-family: 'Antonio';
  src: url('../fonts/Antonio-Regular.ttf') format('truetype'); /* Replace the font path and file name if necessary */
  /* Add additional font formats (e.g., woff, woff2) if you have them */
}
@font-face {
  font-family: 'Spartan';
  src: url('../fonts/Spartan-Regular.ttf') format('truetype'); /* Replace the font path and file name if necessary */
  /* Add additional font formats (e.g., woff, woff2) if you have them */
}
 body {
    box-sizing:border-box;
    height:100vh;
    background-color:#F2F2F2;
    display:flex;
    justify-content:center;
  }
  *{
    margin: 0;
    padding: 0;
  }

`;



export default GlobalStyled;