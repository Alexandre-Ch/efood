import styled, { css } from "styled-components";
import { cores } from "../../../styles/cores";
import { fadeIn, fadeOut, slideIn, slideOut } from "../../../styles/animations";

type AnimationProps = {
  $isClosing: boolean;
};

export const CartBG = styled.div<AnimationProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  animation: ${(props) =>
    props.$isClosing
      ? css`
          ${fadeOut} 0.4s ease forwards
        `
      : css`
          ${fadeIn} 0.4s ease forwards
        `};
`;

export const CartDiv = styled.div<AnimationProps>`
  background-color: ${cores.vermelho};
  width: 360px;
  height: 100%;

  animation: ${(props) =>
    props.$isClosing
      ? css`
          ${slideOut} 0.4s ease-in forwards
        `
      : css`
          ${slideIn} 0.4s ease-out forwards
        `};
`;

export const CartUl = styled.ul`
  padding-top: 32px;
  display: grid;
  gap: 16px;
`;

export const CheckoutDiv = styled.div`
  padding-top: 40px;
  margin: 8px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h3,
    p {
      color: ${cores.bege};
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

export const CheckoutBTN = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  height: 24px;

  &:first-of-type {
    margin-top: 24px;
  }
`;

export const EmptyText = styled.p`
  margin-left: 8px;
  font-size: 14px;
  font-weight: normal;
  color: ${cores.bege};
`;
