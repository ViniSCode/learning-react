import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary: #FF6D5F;
    --secondary: #459BFF;
    --text-color: #555555;
    --title-color: #000000;
    --lighter-text: #343434;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body{
    min-height: 100vh;
    height: 100%;
  }

  #root{
    min-height: 100vh;
    height: 100%;
  }

  *, button, input, select, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: initial;
    font-size: 16px;
  }

  p{
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
  }

  [disabled] {
    opacity: 0.6;
  }  
`