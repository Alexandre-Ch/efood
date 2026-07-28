import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Perfil/Header";
import { PageContainer } from "../../styles/main";
import { Modal } from "../../components/Perfil/Modal";
import { Carrinho } from "../../components/Perfil/Carrinho";
import { Banner, ItemLi, ItensLoja } from "./styles";
import sushi from "../../assets/sushi.png";
import macarrao from "../../assets/macarrao.png";

type ProductParams = {
  id: string;
};

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
    cardapio: [
      {
        id: 1,
        nome: "Combo Hioki Especial",
        descricao:
          "Um mix dos melhores sushis e sashimis preparados com ingredientes frescos e tradição japonesa, perfeito para saborear em casa.",
        foto: sushi,
        preco: 98.9,
        porcao: "2",
      },
    ],
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
    cardapio: [
      {
        id: 2,
        nome: "Fettuccine alla Crema",
        descricao:
          "Fettuccine artesanal ao molho cremoso de queijos italianos, finalizado com manjericão fresco e parmesão ralado na hora.",
        foto: macarrao,
        preco: 76.5,
        porcao: "1",
      },
    ],
  },
];

export function Perfil() {
  const { id } = useParams() as ProductParams;
  const [selectedItem, setSelectedItem] = useState<Prato | null>(null);

  const restaurante = restaurantes.find((restaurante) => String(restaurante.id) === id);

  const getDescricao = (texto: string) => {
    if (texto && texto.length > 115) {
      return texto.slice(0, 107) + ". . .";
    }
    return texto;
  };

  if (!restaurante) {
    return (
      <PageContainer>
        <Header />
        <div className="containerPerfil">
          <h2>Restaurante não encontrado</h2>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Carrinho />
      <Header />
      <Banner $bgImage={restaurante.capa}>
        <div className="containerPerfil">
          <h2>{restaurante.tipo}</h2>
          <h3>{restaurante.titulo}</h3>
        </div>
      </Banner>
      <div className="containerPerfil">
        <ItensLoja>
          {restaurante.cardapio.map((prato) => (
            <ItemLi key={prato.id}>
              <img src={prato.foto} alt={prato.nome} />
              <h3>{prato.nome}</h3>
              <p>{getDescricao(prato.descricao)}</p>
              <button onClick={() => setSelectedItem(prato)}>
                Mais Detalhes
              </button>
            </ItemLi>
          ))}
        </ItensLoja>
      </div>

      {selectedItem && (
        <Modal prato={selectedItem} fecharModal={() => setSelectedItem(null)} />
      )}
    </PageContainer>
  );
}
