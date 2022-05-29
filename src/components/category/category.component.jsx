import { categories, gender } from "./categories";

import CategoryItem from "../category-item/category-item.component";

const Category = () => {
  return (
    <div className="categories-wrapper">
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className="genders-container">
        {gender.map((gender) => (
          <CategoryItem key={gender.id} category={gender} />
        ))}
      </div>
    </div>
  );
};

export default Category;
