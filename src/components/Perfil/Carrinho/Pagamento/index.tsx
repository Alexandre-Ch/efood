import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

import {
  InputGroup,
  DeliveryForm,
  DeliveryLabel,
  DeliveryInput,
} from "../Entrega/styles";
import { Confirmacao } from "../Confirmacao";

import { CheckoutBTN } from "../styles";
import { usePurchaseMutation } from "../../../../services/api";
import type { RootState } from "../../../../store/store";
import { useCustomMasks } from "../../../../utils/masks";

type PagamentoProps = {
  setPayementForm: (value: boolean) => void;
  totalValue: number;
  onFinished: (finished: boolean) => void;
};

export function Pagamento({
  setPayementForm,
  totalValue,
  onFinished,
}: PagamentoProps) {
  const [confirmation, setConfirmation] = useState(false);
  const [purchase, { isSuccess, data }] = usePurchaseMutation();

  const deliveryData = useSelector(
    (state: RootState) => state.cart.deliveryData,
  );
  const itemsNoCarrinho = useSelector((state: RootState) => state.cart.items);

  const { cardNumberMask, cvvMask, expireMaskMonth, expireMaskYear } =
    useCustomMasks();

  const validacaoPagamento = Yup.object({
    name: Yup.string().required("Obrigatório"),
    number: Yup.string().required("Obrigatório").min(19, "Cartão inválido"),
    code: Yup.string().required("Obrigatório").min(3, "CVV inválido"),
    expiresMonth: Yup.string().required("Obrigatório").min(2, "Mês inválido"),
    expiresYear: Yup.string().required("Obrigatório").min(2, "Ano inválido"),
  });

  const form = useFormik({
    initialValues: {
      name: "",
      number: "",
      code: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: validacaoPagamento,
    onSubmit: (values) => {
      if (!deliveryData) return;

      purchase({
        products: itemsNoCarrinho.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: deliveryData.receiver,
          address: {
            description: deliveryData.description,
            city: deliveryData.city,
            zipCode: deliveryData.zipCode,
            number: Number(deliveryData.number),
            complement: deliveryData.complement || "",
          },
        },
        payment: {
          card: {
            name: values.name,
            number: values.number,
            code: Number(values.code),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
      });

      setConfirmation(true);
    },
  });

  return (
    <>
      {!confirmation && !isSuccess ? (
        <>
          <DeliveryForm onSubmit={form.handleSubmit}>
            <h2>
              Pagamento - Valor a pagar{" "}
              {totalValue.toFixed(2).replace(".", ",")}
            </h2>
            <DeliveryLabel>Nome no cartão</DeliveryLabel>
            <DeliveryInput
              id="name"
              name="name"
              type="text"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <InputGroup className="card-cvv">
              <div className="cardNumber">
                <DeliveryLabel>Número do Cartão</DeliveryLabel>
                <DeliveryInput
                  id="number"
                  name="number"
                  type="text"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  ref={cardNumberMask}
                />
              </div>
              <div className="cvv">
                <DeliveryLabel>CVV</DeliveryLabel>
                <DeliveryInput
                  id="code"
                  name="code"
                  type="code"
                  value={form.values.code}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  ref={cvvMask}
                />
              </div>
            </InputGroup>
            <InputGroup className="expires">
              <div className="expire">
                <DeliveryLabel>Mês de vencimento</DeliveryLabel>
                <DeliveryInput
                  id="expiresMonth"
                  name="expiresMonth"
                  type="text"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  ref={expireMaskMonth}
                />
              </div>
              <div className="expire">
                <DeliveryLabel>Ano de vencimento</DeliveryLabel>
                <DeliveryInput
                  id="expiresYear"
                  name="expiresYear"
                  type="text"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  ref={expireMaskYear}
                />
              </div>
            </InputGroup>
            <CheckoutBTN type="submit" disabled={!form.isValid || !form.dirty}>
              Finalizar pagamento
            </CheckoutBTN>
            <CheckoutBTN type="button" onClick={() => setPayementForm(false)}>
              Voltar para a edição de endereço
            </CheckoutBTN>
          </DeliveryForm>
        </>
      ) : (
        <Confirmacao
          orderId={data?.orderId ?? ""}
          cardInfos={form.values}
          onFinished={onFinished}
        />
      )}
    </>
  );
}
