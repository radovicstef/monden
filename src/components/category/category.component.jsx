import { useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const { category, gender } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category][gender].items);
  }, [category, gender, categoriesMap]);

  return (
    <>
      {products.length > 0 && (
        <div className="product-card-wrapper">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
