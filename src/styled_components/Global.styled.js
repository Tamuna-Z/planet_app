import {createGlobalStyle} from "styled-components";
import bgImage from "../../public/assets/background-stars.svg";

export const GlobalStyled =createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;700&family=DM+Sans:ital,wght@0,700;1,400&family=Inter:wght@400;500&family=League+Spartan:wght@400;500;600;700&family=Lobster&family=Space+Grotesk:wght@300;500&display=swap'); */
 body {
    box-sizing:border-box;
    height:100vh;
    background-color:#070724;
    display:flex;
    justify-content:center;
    background-image:url(${bgImage});
    background-size:cover;
  }
  *{
    margin: 0;
    padding: 0;
  }

`;



export default GlobalStyled;