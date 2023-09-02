import { useDispatch, useSelector } from 'react-redux';
import { Section, RecipesList, EmptyAndError } from 'components';

import { getFavoriteDrinks } from 'redux/favorite/selectors';

import {
  deleteFavoriteDrink,
  fetchUserFavoriteDrinks,
} from 'redux/favorite/operations';
import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

const Favorite = () => {
  const [drinksPerPage, setDrinksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const { favoriteDrinks } = useSelector(getFavoriteDrinks);

  useEffect(() => {
    function calculatePerPage(windowWidth) {
      return windowWidth < 1440 ? 8 : 9;
    }
    function handleResize() {
      setDrinksPerPage(calculatePerPage(window.innerWidth));
    }
    setDrinksPerPage(calculatePerPage(window.innerWidth));
    window.addEventListener('resize', handleResize);

    dispatch(fetchUserFavoriteDrinks());
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = favoriteDrinks.slice(
    indexOfFirstDrink,
    indexOfLastDrink
  );

  const seeMoreDrinks = () => {};

  const handleClick = id => {
    dispatch(deleteFavoriteDrink(id));
  };

  return (
    <>
      <Section title="Favorites">
        {favoriteDrinks.length !== 0 ? (
          <>
            <RecipesList array={currentDrinks} action={handleClick} />

            <ButtonLoadMore onClick={seeMoreDrinks} />
          </>
        ) : (
          <EmptyAndError text="You haven`t added any favorite cocktails yet" />
        )}
      </Section>
    </>
  );
};

export default Favorite;
