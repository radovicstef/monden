import "./header.styles.scss";

import { Outlet, Link } from "react-router-dom";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { UserContext } from "../../contexts/user.context";
import { useContext, useState } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  const { isCartOpen, setIsCartOpen, cartItems, cartItemsCount } =
    useContext(CartContext);

  const handleCartToggle = () => {
    setIsCartOpen((prevIsCartOpened) => !prevIsCartOpened);
  };

  const calculateCartItems = () => {
    let initialValue = 0;
    if (!cartItems) {
      return 0;
    }
    return cartItems.reduce(
      (previousValue, currentItem) => previousValue + currentItem.quantity,
      initialValue
    );
  };

  const numOfCartItems = calculateCartItems();

  return (
    <>
      <div className="header-wrapper">
        <div>
          <Link to="/">
            <h1 className="header-logo">monden</h1>
          </Link>
        </div>
        <div className="header-navigation">
          <h3 className="navigation-item">
            <Link to="/shop">shop</Link>
          </h3>
          <h3 className="navigation-item">
            <Link to="/contact">contact</Link>
          </h3>
          <h3 className="navigation-item">
            {currentUser ? (
              <span onClick={signOutHandler}>sign out</span>
            ) : (
              <Link to="/auth">sign in</Link>
            )}
          </h3>
          <div className="navigation-item shop-bag">
            <div className="shop-wrapper" onClick={handleCartToggle}>
              <ShoppingBagIcon />

              {cartItemsCount > 0 && (
                <div className="shop-bag-number">{cartItemsCount}</div>
              )}
              {isCartOpen && <CartDropdown />}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
