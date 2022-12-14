import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
  }

  html,	body {
    background-color: #037459;
    color: snow;
    margin: 0px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #cacecc #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #cacecc;
    border-radius: 10px;
    border: 2px solid #ffffff;
  }
  
`

export default GlobalStyles;