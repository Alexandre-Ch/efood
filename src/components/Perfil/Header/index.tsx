import { useDispatch, useSelector } from "react-redux";
import { open } from "../../../store/reducers/cartSlice";
import type { RootState } from "../../../store/store";
import logo from "../../../assets/logo.png";
import { HomeLink, HeaderDiv, CartBtn } from "./styles";

export default function Header() {
  const dispatch = useDispatch();
  const itemsOnCart = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <HeaderDiv>
        <div className="headerContainer">
          <HomeLink to="/">Restaurantes</HomeLink>
          <img src={logo} />
          <CartBtn onClick={() => dispatch(open())}>
            {itemsOnCart.length} produto(s) no carrinho
          </CartBtn>
        </div>
      </HeaderDiv>
    </>
  );
}
