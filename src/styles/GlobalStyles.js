import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
  }

  html,	body {
    background-color: #037459;
    color: white;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
  }
  
`

export default GlobalStyles;