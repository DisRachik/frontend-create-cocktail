import { CategoryRecipesItem } from 'components';
import { CatigoryList } from './CategoryRecipesList.styled';

import drinks from '../RecipesList/cocktails.json';

const drinksSlise = [...drinks].slice(0, 16);

export const CategoryRecipesList = () => {
  return (
    <CatigoryList>
      {drinksSlise.map(data => (
        <CategoryRecipesItem key={data._id.$oid} data={data} />
      ))}
      
    </CatigoryList>
  );
};
