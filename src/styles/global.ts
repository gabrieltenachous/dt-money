import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body:#969CB3;
        --snape:#FFFFFF;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    //viadagem
    html{
        @media(max-width:1080px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }
    //cor de fundo
    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased; 
    }

    // REM = 1 rem = 16px

    button{
        cursor:pointer;
    }
    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }
`