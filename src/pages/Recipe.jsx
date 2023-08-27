import {
  Section,
  RecipePageHeader,
  RecipeIngredientsList,
  RecipePreparation,
} from 'components';

import { recipeById } from 'components/Recipe/recipeById';

const Recipe = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const { glass, drink, drinkThumb, ingredients, instructions } = recipeById();
  console.log(recipeById());
  const isFavorite = Math.random() < 0.5;

  return (
    <Section>
      <RecipePageHeader
        glass={glass}
        drink={drink}
        desc={null}
        favorite={isFavorite}
        drinkImage={drinkThumb}
      ></RecipePageHeader>
      <RecipeIngredientsList ingredients={ingredients}></RecipeIngredientsList>
      <RecipePreparation
        instructions={instructions.split('.')}
      ></RecipePreparation>
    </Section>
  );
};

export default Recipe;
