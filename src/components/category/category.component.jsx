import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const { category, gender } = useParams();

  return (
    <>
      {Object.keys(categoriesMap).length > 0 && (
        <div className="product-card-wrapper">
          {categoriesMap[category][gender].items.map((product) => (
            <ProductCard key={product.id} id={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
