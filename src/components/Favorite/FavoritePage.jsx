import { EmptyFavoritePage, RecipesList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteDrinks } from 'redux/favorite/selectors';
import { fetchUserFavoriteDrinks } from 'redux/favorite/operations';
import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

export const FavoritePage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { favoriteDrinks } = useSelector(getFavoriteDrinks);

  useEffect(() => {
    dispatch(fetchUserFavoriteDrinks({ page, limit: 2 }));
  }, [dispatch, page]);

  const seeMoreDrinks = () => {
    setPage(prevState => prevState + 1);
    dispatch(fetchUserFavoriteDrinks({ page, limit: 2 }));
  };

  return (
    <>
      {favoriteDrinks.length !== 0 ? (
        <>
          <RecipesList array={favoriteDrinks} />
          <ButtonLoadMore onClick={seeMoreDrinks} />
        </>
      ) : (
        <EmptyFavoritePage />
      )}
    </>
  );
};
