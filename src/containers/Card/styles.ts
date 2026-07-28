import styled from "styled-components";
import { cores } from "../../styles/cores";
import { Link } from "react-router-dom";

export const CardBody = styled.li`
  position: relative;
  max-width: 472px;
  max-height: 398px;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    position: relative;
    width: 100%;
    max-height: 217px;
  }
`;

export const Tag = styled.span`
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  background-color: ${cores.vermelho};
  margin-left: 8px;
  text-transform: capitalize;
`;

export const TagDiv = styled.div`
  position: absolute;
  margin-top: 16px;
  margin-right: 16px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 472px;
  background-color: ${cores.branco};
  padding: 8px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.vermelho};

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 20px;
  }
`;

export const MoreButton = styled(Link)`
  height: 24px;
  width: 82px;
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  border: none;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  padding: 4px 6px;
  margin-bottom: 8px;
`;

export const TitleDiv = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 20px;
      width: 20px;
      margin-left: 8px;
    }
  }
`;
