import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 && "no items"}
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            console.log(item.id);
            return <CartItem key={item.id + item.name} cartItem={item} />;
          })}
      </div>
      <button className="cart-go-to-checkout" onClick={goToCheckoutHandler}>
        go to checkout
      </button>
    </div>
  );
};

export default CartDropdown;
