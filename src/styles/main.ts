import styled, { createGlobalStyle } from "styled-components";
import { cores } from "./cores";

export const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        color: ${cores.vermelho};
        list-style: none;
    }

    .container{
        display: flex;
        max-width: 1336px;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
    }

    .containerPerfil{
    max-width: 1024px;
    margin: 0 auto;
    }

    body{
        background-color: ${cores.begeClaro};
    }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
