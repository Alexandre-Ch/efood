import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";

import { useCustomMasks } from "../../../../utils/masks";
import { Pagamento } from "../Pagamento";
import { setDeliveryData } from "../../../../store/reducers/cartSlice";
import { CheckoutBTN } from "../styles";

import {
  DeliveryForm,
  DeliveryInput,
  DeliveryLabel,
  InputGroup,
} from "./styles";

type EntregaProps = {
  setDeliveryForm: (value: boolean) => void;
  totalValue: number;
  onFinished: (finished: boolean) => void;
};

export function Entrega({
  setDeliveryForm,
  totalValue,
  onFinished,
}: EntregaProps) {
  const dispatch = useDispatch();
  const [paymentForm, setPaymentForm] = useState(false);

  const { cepMaskRef, numeroMaskRef } = useCustomMasks();

  const validacaoEntrega = Yup.object({
    receiver: Yup.string().required("O campo é obrigatório"),
    description: Yup.string().required("O campo é obrigatório"),
    city: Yup.string().required("O campo é obrigatório"),
    zipCode: Yup.string()
      .required("O campo é obrigatório")
      .min(9, "CEP inválido"),
    number: Yup.string().required("O campo é obrigatório"),
    complement: Yup.string(),
  });

  const form = useFormik({
    initialValues: {
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
    },
    validationSchema: validacaoEntrega,
    onSubmit: (values) => {
      dispatch(setDeliveryData(values));
      setPaymentForm(true);
    },
  });

  return (
    <>
      {!paymentForm ? (
        <>
          <DeliveryForm onSubmit={form.handleSubmit}>
            <h2>Entrega</h2>
            <DeliveryLabel>Quem irá receber</DeliveryLabel>
            <DeliveryInput
              id="receiver"
              name="receiver"
              type="text"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <DeliveryLabel>Endereço</DeliveryLabel>
            <DeliveryInput
              id="description"
              name="description"
              type="text"
              value={form.values.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <DeliveryLabel>Cidade</DeliveryLabel>
            <DeliveryInput
              id="city"
              name="city"
              type="text"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <InputGroup className="expires">
              <div>
                <DeliveryLabel>CEP</DeliveryLabel>
                <DeliveryInput
                  id="zipCode"
                  name="zipCode"
                  className="half"
                  type="text"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  ref={cepMaskRef}
                />
              </div>
              <div>
                <DeliveryLabel>Número</DeliveryLabel>
                <DeliveryInput
                  id="number"
                  name="number"
                  type="text"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  ref={numeroMaskRef}
                />
              </div>
            </InputGroup>
            <DeliveryLabel>Complemento (opcional)</DeliveryLabel>
            <DeliveryInput
              id="complement"
              name="complement"
              type="text"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <CheckoutBTN type="submit" disabled={!form.isValid}>
              Continuar para o pagamento
            </CheckoutBTN>
            <CheckoutBTN type="button" onClick={() => setDeliveryForm(false)}>
              Voltar para o carrinho
            </CheckoutBTN>
          </DeliveryForm>
        </>
      ) : (
        <Pagamento
          setPayementForm={setPaymentForm}
          totalValue={totalValue}
          onFinished={onFinished}
        />
      )}
    </>
  );
}
