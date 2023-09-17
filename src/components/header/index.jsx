import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Cart from "../cart/index";
import {loginUser, logoutUser} from "../../redux/user/actions";

// Styles
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.select";



function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} = useSelector((rootReducer) => rootReducer.userReducer)
  const {products} = useSelector((rootReducer) => rootReducer.cartReducer)
  const dispacht = useDispatch()

  const productsCount = useSelector(selectProductsCount)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
      dispacht(loginUser({name: "Wander", email: "wander@amaral.com"}));
  };

  const handleLogoutClick = () => {
    dispacht(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (<div onClick={handleLogoutClick}>Sair</div>) : (<div onClick={handleLoginClick}>Login</div>)}
        
        <div onClick={handleCartClick} >Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
