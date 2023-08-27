import { RecipePageHeader, RecipeIngredientsList } from 'components';

import { recipeById } from 'components/Recipe/recipeById';

const Recipe = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const { glass, drink, drinkThumb, ingredients } = recipeById();
  console.log(recipeById());
  const isFavorite = Math.random() < 0.5;

  return (
    <>
      <RecipePageHeader
        glass={glass}
        drink={drink}
        desc={null}
        favorite={isFavorite}
        drinkImage={drinkThumb}
      ></RecipePageHeader>
      <RecipeIngredientsList
        ingredients={ingredients}
      ></RecipeIngredientsList>
    </>
  );
};

export default Recipe;
