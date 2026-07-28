import styled from "styled-components";
import { DeliveryForm } from "../Entrega/styles";
import { cores } from "../../../../styles/cores";

export const PaymentForm = styled(DeliveryForm)`
  p {
    color: ${cores.bege};
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`;

export const PaymentInfos = styled.div`
  border-top: 2px solid ${cores.bege};
  display: grid;
  color: ${cores.begeClaro};
  margin-left: 8px;
  margin-right: 8px;

  h2,
  p {
    color: ${cores.bege};
    line-height: 22px;
    font-weight: 400;
  }

  p {
    margin-bottom: 2px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  h2 {
    font-size: 16px;
    margin-top: 32px;
    padding: 8px 0px;
  }

  .products {
    div {
      display: flex;
      justify-content: space-between;
      border-top: 2px solid ${cores.bege};

      p,
      span {
        color: ${cores.bege};
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
      }

      span {
        font-weight: bold;
      }
    }

    p {
      color: ${cores.bege};
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
    }
  }
  .delivery {
    p,
    span {
      color: ${cores.bege};
    }

    span {
      color: ${cores.bege};
      font-weight: bold;
    }
  }

  .card {
    p,
    span {
      color: ${cores.bege};
    }

    span {
      font-weight: bold;
    }
  }
`;
