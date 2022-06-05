import "./product-card.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageURL, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card">
      <div className="product-img-container">
        <img className="product-img" alt={name} src={imageURL} />
        <button className="product-add-to-chart" onClick={addProductToCart}>
          Add to cart
        </button>
      </div>
      <div className="product-footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}$</span>
      </div>
    </div>
  );
};

export default ProductCard;
