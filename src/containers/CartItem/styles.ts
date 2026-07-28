import styled from "styled-components";
import { cores } from "../../styles/cores";

export const CartLi = styled.li`
  margin: 0px 8px 0px;
  position: relative;
  background-color: ${cores.bege};
  display: flex;

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-top: 8px;
  }

  p {
    font-weight: 400;
    line-height: 22px;
    font-size: 14px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px;
  }

  div {
    display: grid;
  }
`;

export const DelBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;
