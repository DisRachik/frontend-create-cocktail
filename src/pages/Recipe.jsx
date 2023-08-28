import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchRecipeById, selectRecipes } from 'redux/recipes/index';

import {
  Section,
  RecipePageHeader,
  RecipeIngredientsList,
  RecipePreparation,
} from 'components';

const Recipe = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const recipe = useSelector(selectRecipes.recipe);

  useEffect(() => {
    dispatch(fetchRecipeById('639b6de9ff77d221f190c508'))
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error fetching recipe:', error);
      });
  }, [dispatch]);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const { glass, drink, drinkThumb, ingredients, instructions } = recipe;

  const isFavorite = Math.random() < 0.5;

  return (
    <>
      {!isLoading && (
        <Section>
          <RecipePageHeader
            glass={glass}
            drink={drink}
            desc={null}
            favorite={isFavorite}
            drinkImage={drinkThumb}
          ></RecipePageHeader>
          <>
            <RecipeIngredientsList
              ingredients={ingredients}
            ></RecipeIngredientsList>
            <RecipePreparation instructions={instructions}></RecipePreparation>
          </>
        </Section>
      )}
    </>
  );
};

export default Recipe;
