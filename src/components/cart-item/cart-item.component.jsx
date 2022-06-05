import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageURL, price } = cartItem;
  return (
    <div className="cart-item-container">
      <div className="cart-item-img">
        <img alt={name} src={imageURL} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-quantity">
          {quantity} x {price}$
        </div>
      </div>
    </div>
  );
};

export default CartItem;
