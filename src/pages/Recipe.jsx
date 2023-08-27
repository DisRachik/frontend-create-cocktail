import { RecipePageHeader } from 'components';

import { recipeById } from 'components/Recipe/recipeById';

const Recipe = () => {
  const { glass, drink, drinkThumb } = recipeById();
  console.log(recipeById());
  const isFavorite = Math.random() < 0.5;

  return (
    // В проп pretitle потрібно передати назву БОКАЛУ для коктейлю отриману з бази по Id
    // В проп title потрібно передати назву коктейлю отриману з бази по Id
    <RecipePageHeader
      glass={glass}
      drink={drink}
      desc={null}
      favorite={isFavorite}
      drinkImage={drinkThumb}
    ></RecipePageHeader>
  );
};

export default Recipe;
