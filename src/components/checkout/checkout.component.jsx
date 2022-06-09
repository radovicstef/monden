import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
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

  const getTotalPrice = () => {
    const initialValue = 0;
    const totalPrice = cartItems.reduce(
      (previousValue, item) => previousValue + item.quantity * item.price,
      initialValue
    );
    return totalPrice;
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-header">
        {headers.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </div>
      <div>
        {cartItems.map((item) => {
          const { id, name, quantity, imageURL, price } = item;
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
                    <ArrowDropDownIcon
                      onClick={() => decrementQuantity(item)}
                    />
                  </div>
                </div>
              </div>
              <div>{quantity * price}$</div>
              <div className="checkout-remove">
                <CloseIcon onClick={() => removeItem(item)} />
              </div>
            </div>
          );
        })}
        {cartItems.length > 0 && (
          <div className="total-price-wrapper">
            {headers.slice(0, headers.length - 1).map(() => {
              return <div></div>;
            })}
            <div className="total-price">Total: {getTotalPrice()}$</div>
          </div>
        )}
        {cartItems.length === 0 && "No items"}
      </div>
    </div>
  );
};

export default Checkout;
