import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageURL, price } = product;
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img className="product-img" alt={name} src={imageURL} />
        <button className="product-add-to-chart">Add to cart</button>
      </div>
      <div className="product-footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}$</span>
      </div>
    </div>
  );
};

export default ProductCard;
