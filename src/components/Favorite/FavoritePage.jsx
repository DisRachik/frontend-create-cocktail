// import Paginator from 'shared/components/Paginator/Paginator';
import { EmptyFavoritePage, RecipesList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteDrinks } from 'redux/favorite/selectors';
import { fatchUserFavoritsDrinks } from '../../redux/favorite/operations';
import { useEffect } from 'react';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const { favoriteDrinks } = useSelector(getFavoriteDrinks);

  useEffect(() => {
    dispatch(fatchUserFavoritsDrinks('64e9e5b0560e3b35a2a95c89'));
  }, [dispatch]);

  return (
    <>
      {Array.from(favoriteDrinks).length !== 0 ? (
        <RecipesList array={favoriteDrinks} />
      ) : (
        <EmptyFavoritePage />
      )}
    </>
  );
};
