import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../../containers/CartItem";
import {
  CartBG,
  CartDiv,
  CartUl,
  CheckoutBTN,
  CheckoutDiv,
  EmptyText,
} from "./styles";
import { close } from "../../../store/reducers/cartSlice";
import type { RootState } from "../../../store/store";
import { useState } from "react";
import { Entrega } from "./Entrega";

export function Carrinho() {
  const dispatch = useDispatch();
  const [deliveryForm, setDeliveryForm] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const itemsOnCart = useSelector((state: RootState) => state.cart.items);
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);

  if (!isOpen) return null;

  const totalValue = itemsOnCart.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual.preco;
  }, 0);

  const handleContinuarEntrega = () => {
    if (itemsOnCart.length === 0) {
      alert("O carrinho está vázio!");
      return;
    }
    setDeliveryForm(true);
  };

  const handleOverlayClick = () => {
    if (isFinished) return;

    setIsClosing(true);
    setTimeout(() => {
      setDeliveryForm(false);
      dispatch(close());
      setIsClosing(false);
    }, 400);
  };

  return (
    <>
      <CartBG onClick={handleOverlayClick} $isClosing={isClosing}>
        <CartDiv onClick={(e) => e.stopPropagation()} $isClosing={isClosing}>
          {!deliveryForm ? (
            <>
              <CartUl>
                {itemsOnCart.length === 0 ? (
                  <EmptyText>Seu carrinho está vázio.</EmptyText>
                ) : (
                  itemsOnCart.map((item, index) => (
                    <CartItem key={`${item.id}-${index}`} prato={item} />
                  ))
                )}
              </CartUl>
              <CheckoutDiv>
                <div>
                  <h3>Valor total</h3>
                  <p>R$ {totalValue.toFixed(2).replace(".", ",")}</p>
                </div>
                <CheckoutBTN onClick={handleContinuarEntrega}>
                  Continuar com a entrega
                </CheckoutBTN>
              </CheckoutDiv>
            </>
          ) : (
            <Entrega
              setDeliveryForm={setDeliveryForm}
              totalValue={totalValue}
              onFinished={setIsFinished}
            />
          )}
        </CartDiv>
      </CartBG>
    </>
  );
}
