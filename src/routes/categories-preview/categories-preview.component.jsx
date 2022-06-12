import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { Fragment } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
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
    </>
  );
};

export default CategoriesPreview;
