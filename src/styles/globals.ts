import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color:rgb(14, 14, 14);
            font-family: "Montserrat", sans-serif;

        a {
            text-decoration: none;
        }
    }
`;