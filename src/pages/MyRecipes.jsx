import { EmptyAndError, Section } from 'components';
import { RecipesList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectMyRecipes,
} from 'redux/myRecipes/selectors';
import { useEffect, useState } from 'react';
import { deleteMyRecipes, fetchMyRecipes } from 'redux/myRecipes/operations';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const myRecipes = useSelector(selectMyRecipes);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const imagePerRow = 3;
  const [next, setNext] = useState(imagePerRow);

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  const handleClick = async id => {
    dispatch(deleteMyRecipes(id));
  };

  const seeMoreDrinks = () => {
    setNext(next + imagePerRow);
  };

  const sliceRecipes = myRecipes.slice(0, next);

  const isMyRecipes = myRecipes.length > 0;

  return (
    <>
      <Section title="My recipes">
        <>
          {isMyRecipes ? (
            <RecipesList array={sliceRecipes} action={handleClick} />
          ) : (
            <EmptyAndError text="You don't have your recipes" />
          )}
          {myRecipes.length !== sliceRecipes.length && (
            <ButtonLoadMore onClick={seeMoreDrinks} />
          )}
          {isLoading && !error && <b>Request in progress...</b>}
        </>
      </Section>
    </>
  );
};

export default MyRecipes;
