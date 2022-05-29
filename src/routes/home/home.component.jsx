import Category from "../../components/category/category.component";

import { categories, gender } from "./categories";

const Home = () => {
  return <Category categories={categories} gender={gender} />;
};

export default Home;
