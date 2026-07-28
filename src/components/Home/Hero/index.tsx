import { BrandTitle, HeroDiv } from "./styles";
import logo from "../../../assets/logo.png";

export default function Hero() {
  return (
    <>
      <HeroDiv>
        <img src={logo} />
        <BrandTitle>
          Viva experiências gastronômicas no conforto da sua casa!
        </BrandTitle>
      </HeroDiv>
    </>
  );
}
