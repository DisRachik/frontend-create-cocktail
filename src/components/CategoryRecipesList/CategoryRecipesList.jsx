import { CategoryRecipesItem } from 'components';
import { CatigoryList } from './CategoryRecipesList.styled';

import drinks from './cocktails.json';
// import categories from './categories.json';

const drinksSlise = [...drinks].slice(0, 6);
// const categoriesSlise = [...categories].slice(0, 4);
export const CategoryRecipesList = () => {
  return (
    <CatigoryList>
      {drinksSlise.map(data => (
        <CategoryRecipesItem key={data._id.$oid} data={data} />
      ))}
    </CatigoryList>
  );
};
