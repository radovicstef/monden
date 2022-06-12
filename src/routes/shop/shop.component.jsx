import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const { category, gender } = useParams();

  console.log("SHOP");
  console.log(categoriesMap);
  console.log(category + " " + gender);

  return (
    <div className="shop-wrapper">
      {!(category && gender) &&
        Object.keys(categoriesMap).map((category) => {
          const products = categoriesMap[category];
          const menProducts = products["men"]["items"];
          const womenProducts = products["women"]["items"];
          return (
            <Fragment key={category}>
              <CategoryPreview
                key={category + "men"}
                title={category}
                gender="men"
                products={menProducts}
              />
              <CategoryPreview
                key={category + "women"}
                title={category}
                gender="women"
                products={womenProducts}
              />
            </Fragment>
          );
        })}
      {Object.keys(categoriesMap).length > 0 && category && gender && (
        <div className="product-card-wrapper">
          {categoriesMap[category][gender]["items"].map((product) => (
            <ProductCard key={product.id} id={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
