import logo from "../../../assets/logo.png";
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import { FooterContainer, FooterInfo, FooterUl } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <img src={logo} />
      <FooterUl>
        <li>
          <img src={instagram} />
        </li>
        <li>
          <img src={facebook} />
        </li>
        <li>
          <img src={twitter} />
        </li>
      </FooterUl>
      <FooterInfo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterInfo>
    </FooterContainer>
  );
}
