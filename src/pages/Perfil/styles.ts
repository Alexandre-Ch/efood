import styled from "styled-components";
import { cores } from "../../styles/cores";

type BannerProps = {
  $bgImage: string | undefined;
};

export const Banner = styled.div<BannerProps>`
  height: 280px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.$bgImage});
  background-size: cover;
  object-fit: cover;

  .containerPerfil {
    display: grid;
    row-gap: 156px;

    h2 {
      color: ${cores.branco};
      margin-top: 24px;
      font-weight: 100;
      font-size: 32px;
    }

    h3 {
      color: ${cores.branco};
      margin-bottom: 32px;
      font-weight: 900;
      font-size: 32px;
    }
  }
`;

export const ItensLoja = styled.ul`
  display: grid;
  margin-top: 56px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`;

export const ItemLi = styled.li`
  display: block;
  background-color: ${cores.vermelho};
  max-width: 320px;
  max-height: 338px;
  padding: 8px;

  img {
    width: 304px;
    height: 167px;
  }

  h3 {
    color: ${cores.bege};
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    color: ${cores.bege};
    margin-bottom: 8px;
    line-height: 22px;
    letter-spacing: 0px;
    font-size: 14px;
  }

  button {
    width: 100%;
    height: 24px;
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const Loading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;
