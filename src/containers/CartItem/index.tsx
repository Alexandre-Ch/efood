import { useDispatch } from "react-redux";
import { remove } from "../../store/reducers/cartSlice";
import lixeira from "../../assets/lixeira-de-reciclagem.png";
import { CartLi, DelBtn } from "./styles";

type CartProps = {
  prato: Prato;
};

export function CartItem({ prato }: CartProps) {
  const dispatch = useDispatch();

  return (
    <>
      <CartLi>
        <img src={prato.foto} />
        <div>
          <h2>{prato.nome}</h2>
          <p>R$ {prato.preco.toFixed(2).replace(".", ",")}</p>
        </div>
        <DelBtn onClick={() => dispatch(remove(prato.id))}>
          <img src={lixeira} />
        </DelBtn>
      </CartLi>
    </>
  );
}
