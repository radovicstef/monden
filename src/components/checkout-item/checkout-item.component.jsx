import "./checkout-item.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

const CheckoutItem = ({ item }) => {
  const { id, name, imageURL, quantity, price } = item;

  const {addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const incrementQuantity = (cartItem) => {
    addItemToCart(cartItem);
  };

  const decrementQuantity = (cartItem) => {
    removeItemFromCart(cartItem);
  };

  const removeItem = (item) => {
    item.quantity = 0;
    removeItemFromCart(item);
  };

  return (
    <div key={id} className="checkout-wrapper-item">
      <div className="checkout-img">
        <img alt={name} src={imageURL} />
      </div>
      <div className="checkout-name">{name}</div>
      <div className="checkout-quantity-wrapper">
        <div className="checkout-quantity">{quantity}</div>
        <div className="checkout-quantity-arrow">
          <div className="checkout-quantity-arrow-up">
            <ArrowDropUpIcon onClick={() => incrementQuantity(item)} />
          </div>
          <div className="checkout-quantity-arrow-down">
            <ArrowDropDownIcon onClick={() => decrementQuantity(item)} />
          </div>
        </div>
      </div>
      <div>{quantity * price}$</div>
      <div className="checkout-remove">
        <CloseIcon onClick={() => removeItem(item)} />
      </div>
    </div>
  );
};

export default CheckoutItem;
