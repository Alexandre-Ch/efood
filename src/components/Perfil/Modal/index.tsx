import { useDispatch } from "react-redux";
import { useState } from "react";
import { AddCart, Close, ModalBG, ModalDiv } from "./styles";
import { add } from "../../../store/reducers/cartSlice";

type ModalProps = {
  prato: Prato;
  fecharModal: () => void;
};

export function Modal({ prato, fecharModal }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(prato));
    setIsClosing(true);

    setTimeout(() => {
      fecharModal();
    }, 500);
  };
  const handleCloseWithAnimation = () => {
    setIsClosing(true);

    setTimeout(() => {
      fecharModal();
    }, 500);
  };

  return (
    <>
      <ModalBG $isClosing={isClosing}>
        <ModalDiv $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
          <Close className="close-btn" onClick={handleCloseWithAnimation}>
            X
          </Close>
          <img src={prato.foto} />
          <div>
            <h2>{prato.nome}</h2>
            <p>{prato.descricao}</p>
            <p>Serve: de {prato.porcao} pessoa(s)</p>

            <AddCart type="button" onClick={handleAddToCart}>
              Adicionar ao Carrinho - R${" "}
              {prato.preco.toFixed(2).replace(".", ",")}
            </AddCart>
          </div>
        </ModalDiv>
      </ModalBG>
    </>
  );
}
