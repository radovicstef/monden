import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          console.log(item.id);
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <button className="cart-go-to-checkout">go to checkout</button>
    </div>
  );
};

export default CartDropdown;
