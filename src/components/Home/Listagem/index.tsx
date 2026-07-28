import Card from "../../../containers/Card";
import { ListUl } from "./styles";

export type Props = {
  itens: Restaurante[];
};

const Listagem = ({ itens }: Props) => {
  return (
    <ListUl>
      {itens.map((item) => (
        <Card
          id={item.id}
          key={item.id}
          type={item.tipo}
          description={item.descricao}
          image={item.capa}
          title={item.titulo}
          rating={item.avaliacao}
          top={item.destacado}
        />
      ))}
    </ListUl>
  );
};

export default Listagem;
