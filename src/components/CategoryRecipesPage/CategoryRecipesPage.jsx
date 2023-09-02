import { CategoryRecipesList } from 'components';

import { fetchMainRecipes } from 'redux/mainRecipes/mainRecipesOperations';
import { selectMainRecipes } from 'redux/mainRecipes/mainRecipesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const CategoryRecipesPage = ({ category }) => {
  const dispatch = useDispatch();
  const mainRecipes = useSelector(selectMainRecipes);

  const filteredArray = mainRecipes.filter(
    recipe => recipe.category === category
  );

  useEffect(() => {
    dispatch(fetchMainRecipes());
  }, [dispatch]);

  return (
    <>
      <CategoryRecipesList array={filteredArray} />
    </>
  );
};
