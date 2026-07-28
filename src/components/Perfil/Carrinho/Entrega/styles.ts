import styled from "styled-components";
import { cores } from "../../../../styles/cores";

export const DeliveryForm = styled.form`
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    color: ${cores.bege};
    font-size: 16px;
    margin-bottom: 16px;
  }

  input {
    background-color: ${cores.bege};
    color: ${cores.cinza};
    font-weight: bold;
    border: none;
    width: 100%;
    height: 32px;
    padding: 0 8px;
    outline: none;
  }
`;

export const DeliveryLabel = styled.label`
  color: ${cores.bege};
  font-weight: 700;
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
`;

export const DeliveryInput = styled.input``;

export const InputGroup = styled.div`
  display: grid;
  gap: 30px;
  margin-top: 8px;

  &.card-cvv {
    grid-template-columns: 3fr 1fr;
  }

  &.expires {
    grid-template-columns: 1fr 1fr;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;
