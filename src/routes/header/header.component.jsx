import {
  HeaderContainer,
  HeaderNavigation,
  HeaderNavigationItem,
  HeaderNavigationItemShopBag,
  LinkUnstyled,
  Logo,
  ShopBagNumber,
  ShopBagWrapper,
} from "./header.styles.jsx";

import { Outlet, Link } from "react-router-dom";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <HeaderContainer>
        <div>
          <LinkUnstyled to="/">
            <Logo>monden</Logo>
          </LinkUnstyled>
        </div>
        <HeaderNavigation>
          <HeaderNavigationItem>
            <LinkUnstyled to="/shop">shop</LinkUnstyled>
          </HeaderNavigationItem>
          <HeaderNavigationItem>
            <LinkUnstyled to="/contact">contact</LinkUnstyled>
          </HeaderNavigationItem>
          <HeaderNavigationItem>
            {currentUser ? (
              <span onClick={signOutHandler}>sign out</span>
            ) : (
              <LinkUnstyled to="/auth">sign in</LinkUnstyled>
            )}
          </HeaderNavigationItem>
          <HeaderNavigationItemShopBag>
            <ShopBagWrapper onClick={handleCartToggle}>
              <ShoppingBagIcon />

              {cartItemsCount > 0 && (
                <ShopBagNumber>{cartItemsCount}</ShopBagNumber>
              )}
              {isCartOpen && <CartDropdown />}
            </ShopBagWrapper>
          </HeaderNavigationItemShopBag>
        </HeaderNavigation>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
