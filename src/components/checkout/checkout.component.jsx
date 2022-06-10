import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

import CheckoutItem from "../checkout-item/checkout-item.component";

const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-wrapper">
      <div className="checkout-header">
        {headers.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </div>
      <div>
        {cartItems.map((item) => {
          const { id } = item;
          return <CheckoutItem id={id} item={item} />;
        })}
        {cartItems.length > 0 && (
          <div className="total-price-wrapper">
            {headers.slice(0, headers.length - 1).map(() => {
              return <div></div>;
            })}
            <div className="total-price">Total: {totalPrice}$</div>
          </div>
        )}
        {cartItems.length === 0 && "No items"}
      </div>
    </div>
  );
};

export default Checkout;
