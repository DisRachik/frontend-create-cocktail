// import Paginator from 'shared/components/Paginator/Paginator';
import { RecipesList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectError,
  // selectLoading,
  selectMyRecipes,
} from 'redux/myRecipes/selectors';
import { useEffect } from 'react';
import { fetchMyRecipes } from 'redux/myRecipes/operations';

export const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const myRecipes = useSelector(selectMyRecipes);
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  const isMyRecipes = myRecipes.length > 0;
  console.log(isMyRecipes);

  return <RecipesList />;
};
