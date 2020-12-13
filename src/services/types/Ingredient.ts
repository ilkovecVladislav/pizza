import type Categories from 'types/Categories';

type Ingredient = {
  name: string;
  slug: string;
  price: number;
  category: Categories;
  image: File;
};

export default Ingredient;
