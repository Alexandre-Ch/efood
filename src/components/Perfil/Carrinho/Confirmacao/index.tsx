import { useDispatch, useSelector } from "react-redux";
import { close, clearCart } from "../../../../store/reducers/cartSlice";
import { CheckoutBTN } from "../styles";
import { PaymentForm, PaymentInfos } from "./styles";
import type { RootState } from "../../../../store/store";
import { Loading } from "../../../Loading";
import { useEffect } from "react";

type CardInfos = {
  name: string;
  number: string;
  code: string;
};

type ConfirmacaoProps = {
  orderId: string | number;
  cardInfos: CardInfos;
  onFinished: (finished: boolean) => void;
};

export function Confirmacao({
  orderId,
  cardInfos,
  onFinished,
}: ConfirmacaoProps) {
  const dispatch = useDispatch();

  const deliveryData = useSelector(
    (state: RootState) => state.cart.deliveryData,
  );
  const itemsNoCarrinho = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    onFinished(true);

    return () => onFinished(false);
  }, [onFinished]);

  const handleFinalizarPedido = () => {
    dispatch(clearCart());
    dispatch(close());
  };

  const hideCartNumber = (numero: string) => {
    if (!numero) return "";
    const onlyNumbers = numero.replace(/\D/g, "");
    return `**** **** **** ${onlyNumbers.slice(-4)}`;
  };

  return (
    <>
      <PaymentForm>
        <h2>Pedido Realizado! - {orderId || "Carregando. . ."}</h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </PaymentForm>
      <PaymentInfos>
        <h2>Informações de entrega:</h2>
        {deliveryData ? (
          <>
            <div className="delivery">
              <p>
                Nome do Receptor: <span>{deliveryData.receiver}</span>
              </p>
              <p>
                CEP: <span>{deliveryData.receiver}</span>
              </p>
              <p>
                Cidade: <span>{deliveryData.city}</span>
              </p>
              <div>
                <p>
                  Endereço: <span>{deliveryData.description}</span>
                </p>
                <p>
                  Número: <span>{deliveryData.number}</span>
                </p>
              </div>
              <p>
                Complemento: <span>{deliveryData.complement}</span>
              </p>
            </div>
          </>
        ) : (
          <Loading />
        )}
        <h2>Informações de compra:</h2>
        {cardInfos ? (
          <div className="card">
            <p>
              Número do Cartão: <span>{hideCartNumber(cardInfos.number)}</span>
            </p>
            <p>
              Nome do proprietário: <span>{cardInfos.name}</span>
            </p>
          </div>
        ) : (
          <Loading />
        )}
        <h2>Produtos selecionados:</h2>
        <div className="products">
          {itemsNoCarrinho.map((item) => (
            <div key={item.id}>
              <p>
                <span>{item.nome}</span>
              </p>
              <p>
                R$<span>{item.preco.toFixed(2).replace(".", ",")}</span>
              </p>
            </div>
          ))}
        </div>
      </PaymentInfos>
      <CheckoutBTN type="button" onClick={handleFinalizarPedido}>
        Concluir
      </CheckoutBTN>
    </>
  );
}
