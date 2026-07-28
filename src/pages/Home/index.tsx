import Hero from "../../components/Home/Hero";
import Listagem from "../../components/Home/Listagem";
import { PageContainer } from "../../styles/main";
import sushi from "../../assets/sushi.png";
import macarrao from "../../assets/macarrao.png";

const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: "Hioki Sushi",
    destacado: true,
    tipo: "Japonesa",
    avaliacao: 4.9,
    descricao:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    capa: sushi,
    cardapio: [],
  },
  {
    id: 2,
    titulo: "La Dolce Vita Trattoria",
    destacado: false,
    tipo: "Italiana",
    avaliacao: 4.8,
    descricao:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    capa: macarrao,
    cardapio: [],
  },
];

export function Home() {
  return (
    <>
      <PageContainer>
        <Hero />
        <div className="container">
          <Listagem itens={restaurantes} />
        </div>
      </PageContainer>
    </>
  );
}
