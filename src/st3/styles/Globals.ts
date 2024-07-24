import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        
    }

    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        ::-webkit-scrollbar{
        width: 1rem;
        }
        ::-webkit-scrollbar-track{
        background: ${props=>props.theme.colors.primary};
        }
        ::-webkit-scrollbar-thumb{
            background: ${props=>props.theme.colors.tertiary};
            border-radius: 1rem;
        }
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${props=>props.theme.colors.primary};
        color: ${props=>props.theme.colors.white};
    }
    a{
        text-decoration: none;
        color: ${props=>props.theme.colors.white};
    }
    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
        padding: 0;
    }
    input{
        border: none;
        outline: none;
    }
`;
