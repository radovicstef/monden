import { Route, Routes } from "react-router-dom";

import Category from "../../components/category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category/:gender" element={<Category />} />
    </Routes>
  );
};

export default Shop;
