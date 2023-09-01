import { useEffect, useState } from 'react';

import { getRecipeById } from 'api';

import {
  Section,
  RecipePageHeader,
  RecipeIngredientsList,
  RecipePreparation,
  EmptyAndError,
} from 'components';

const Recipe = () => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);

  const location = window.location.pathname.split('recipe/');
  const recipeId = location[1];

  useEffect(() => {
    getRecipeById(recipeId)
      .then(data => {
        setStatus('RESOLVED');
        setRecipeInfo(data);
      })
      .catch(error => {
        setStatus('REJECTED');
        setError(error);
      });
  }, [recipeId]);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Section>
      {error ? (
        <EmptyAndError
          errorScreen
          text="The recipe you were looking for is missing."
        />
      ) : (
        status === 'RESOLVED' && (
          <>
            <RecipePageHeader
              glass={recipeInfo.glass}
              drink={recipeInfo.drink}
              desc={recipeInfo.desc}
              recipeId={recipeInfo._id || recipeInfo.recipeId}
              favorites={recipeInfo.favorites}
              drinkImage={recipeInfo.drinkThumb}
            />
            <RecipeIngredientsList ingredients={recipeInfo.ingredients} />
            <RecipePreparation instructions={recipeInfo.instructions} />
          </>
        )
      )}
    </Section>
  );
};

export default Recipe;
