import { Section } from 'components';
import { MyRecipesPage } from '../components/MyRecipes/MyRecipesPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectError,
  // selectLoading,
  selectMyRecipes,
} from 'redux/myRecipes/selectors';
import { useEffect } from 'react';
import { fetchMyRecipes } from 'redux/myRecipes/operations';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const myRecipes = useSelector(selectMyRecipes);
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  const isMyRecipes = myRecipes.length > 0;
  console.log(isMyRecipes);
  return (
    <>
      <Section title="My recipes">
        <MyRecipesPage />
      </Section>
    </>
  );
};

export default MyRecipes;
