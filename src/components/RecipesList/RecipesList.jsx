import { RecipesItem } from 'components';
import { FavoriteList } from './RecipesList.styled';

import drinks from './cocktails.json';

const drinksSlise = [...drinks].slice(0, 16);

export const RecipesList = () => {
  return (
    <FavoriteList>
      {drinksSlise.map(data => (
        <RecipesItem key={data._id.$oid} data={data} />
      ))}
    </FavoriteList>
  );
};
