import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, gender, products }) => {
  return (
    <div className="category-preview-wrapper">
      <Link className="category-preview-link" to={`/shop/${title}/${gender}`}>
        <div className="category-preview-header">
          <div className="category-preview-header-title">{title}</div>
          <div>|</div>
          <div className="category-preview-header-gender">{gender}</div>
        </div>
      </Link>
      <div className="products-wrapper">
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => (
            <ProductCard
              key={product.id + product.name}
              id={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
