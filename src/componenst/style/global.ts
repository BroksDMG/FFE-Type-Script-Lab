import reset from 'styled-reset';
import { createGlobalStyle } from "styled-components";
import {colorStack} from "./colorStack";

export const GlobalStyle = createGlobalStyle`
    ${reset}    
    html{
        font-size:16px;
    }

    body{
        background: ${colorStack.white};
        margin:0;
        padding:0;
        overflow:hidden;
        height:100vh;
        font-family:'Roboto', sans-serif;
    }
    a,p{
        color: ${colorStack.white};
        font-size:1rem;
        text-decoration:none;
    }

`