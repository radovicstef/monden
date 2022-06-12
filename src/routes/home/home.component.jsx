import CategoryList from "../../components/category-list/category-list.component";

import { categories, gender } from "./categories";

const Home = () => {
  return <CategoryList categories={categories} gender={gender} />;
};

export default Home;
