import { EmptyAndError, Section } from 'components';
import { RecipesList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectMyRecipes,
} from 'redux/myRecipes/selectors';
import { useEffect } from 'react';
import { deleteMyRecipes, fetchMyRecipes } from 'redux/myRecipes/operations';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const myRecipes = useSelector(selectMyRecipes);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  const handleClick = async id => {
    dispatch(deleteMyRecipes(id));
  };

  const isMyRecipes = myRecipes.length > 0;
  return (
    <>
      <Section title="My recipes">
        <>
          {isMyRecipes ? (
            <RecipesList array={myRecipes} action={handleClick} />
          ) : (
            <EmptyAndError text="You don't have your recipes" />
          )}
          {isLoading && !error && <b>Request in progress...</b>}
        </>
      </Section>
    </>
  );
};

export default MyRecipes;
