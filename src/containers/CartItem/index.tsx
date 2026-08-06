import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  remove,
} from "../../store/reducers/cartSlice";
import lixeira from "../../assets/lixeira-de-reciclagem.png";
import { CartLi, DelBtn, QuantityControls } from "./styles";

type CartProps = {
  prato: Prato & { quantity: number };
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
          <QuantityControls>
            <button
              type="button"
              onClick={() => dispatch(decreaseQuantity(prato.id))}
            >
              -
            </button>
            <span>{prato.quantity}</span>
            <button
              type="button"
              onClick={() => dispatch(increaseQuantity(prato.id))}
            >
              +
            </button>
          </QuantityControls>
        </div>
        <DelBtn type="button" onClick={() => dispatch(remove(prato.id))}>
          <img src={lixeira} />
        </DelBtn>
      </CartLi>
    </>
  );
}
