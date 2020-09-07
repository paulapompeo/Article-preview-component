import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background:#ECF2F8;
        -webkit-font-smoothing: antialiased;
        font-family: 'Manrope', serif;
    }

    button {
    cursor: pointer;
  }

  #root {
      max-width: 730px;
      margin: 0 auto;
      padding: 40px 20px;
  }
`;
