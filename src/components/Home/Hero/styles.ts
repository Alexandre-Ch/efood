import styled from "styled-components";
import heroBg from "../../../assets/hero_background.png";

export const BrandTitle = styled.h1`
  margin-top: 138px;
  font-size: 36px;
  font-weight: 900;
  max-width: 539px;
  text-align: center;
`;

export const HeroDiv = styled.div`
  height: 384px;
  width: 100%;
  background-image: url("${heroBg}");
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 48px;
    width: 125px;
    height: 57.5px;
  }
`;
