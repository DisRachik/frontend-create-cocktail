// import Paginator from 'shared/components/Paginator/Paginator';
import { EmptyFavoritePage, RecipesList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteDrinks } from 'redux/favorite/selectors';
import { fetchUserFavoriteDrinks } from 'redux/favorite/operations';
import { useEffect } from 'react';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const { favoriteDrinks } = useSelector(getFavoriteDrinks);
  console.log(favoriteDrinks);

  useEffect(() => {
    dispatch(fetchUserFavoriteDrinks('64eceb2d1aae0da56707911c'));
  }, [dispatch]);

  return (
    <>
      {favoriteDrinks.length !== 0 ? (
        <RecipesList array={favoriteDrinks} />
      ) : (
        <EmptyFavoritePage />
      )}
    </>
  );
};
