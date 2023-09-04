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
    const fetchData = async () => {
      try {
        const data = await getRecipeById(recipeId);
        setRecipeInfo(data);
        console.log(recipeInfo);
        setStatus('RESOLVED');
      } catch (error) {
        setError(error);
        setStatus('REJECTED');
      }
    };

    fetchData();
  }, [recipeId]);

  const isRecipeAvailable = status === 'RESOLVED';

  return (
    <Section>
      {error ? (
        <EmptyAndError
          errorScreen
          text="The recipe you were looking for is missing."
        />
      ) : (
        isRecipeAvailable && (
          <>
            <RecipePageHeader
              glass={recipeInfo.glass}
              drink={recipeInfo.drink}
              about={recipeInfo.about}
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
