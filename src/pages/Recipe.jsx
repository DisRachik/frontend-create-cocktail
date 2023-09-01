import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchRecipeById, selectRecipe } from 'redux/recipe/index';

import {
  Section,
  RecipePageHeader,
  RecipeIngredientsList,
  RecipePreparation,
  EmptyAndError,
} from 'components';

const Recipe = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe.recipe);
  const error = useSelector(selectRecipe.error);

  const {
    glass,
    desc,
    drink,
    drinkThumb,
    favorites,
    ingredients,
    instructions,
  } = recipe;

  const location = window.location.pathname.split('recipe/');
  const recipeId = location[1];

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, [dispatch, recipeId]);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Section>
      {error ? (
        <EmptyAndError errorScreen text="The recipe you were looking for is missing." />
      ) : (
        <>
          <RecipePageHeader
            glass={glass}
            drink={drink}
            desc={desc}
            recipeId={recipeId}
            favorites={favorites}
            drinkImage={drinkThumb}
          />
          <RecipeIngredientsList ingredients={ingredients} />
          <RecipePreparation instructions={instructions} />
        </>
      )}
    </Section>
  );
};

export default Recipe;
