import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-size: 15px;
        font-family: 'Roboto Mono', monospace;
    }
`;

export default GlobalStyle;