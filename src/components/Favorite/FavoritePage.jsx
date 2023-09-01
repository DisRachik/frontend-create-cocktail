import { EmptyFavoritePage, RecipesList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFavoriteDrinks,
  getTotalHitsFavorite,
} from 'redux/favorite/selectors';

import {
  changeFavoriteStatus,
  fetchUserFavoriteDrinks,
} from 'redux/favorite/operations';
import { useEffect, useState } from 'react';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';

export const FavoritePage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const { favoriteDrinks } = useSelector(getFavoriteDrinks);

  const TotalHitsFavorite = useSelector(getTotalHitsFavorite);

  useEffect(() => {
    dispatch(fetchUserFavoriteDrinks({ page, limit: 9 }));
  }, [dispatch, page]);

  const seeMoreDrinks = () => {
    setPage(prevState => prevState + 1);
    dispatch(fetchUserFavoriteDrinks({ page, limit: 9 }));
  };

  const handleClick = async id => {
    dispatch(changeFavoriteStatus(id));
  };

  return (
    <>
      {favoriteDrinks.length !== 0 ? (
        <>
          <RecipesList array={favoriteDrinks} action={handleClick} />
          {TotalHitsFavorite > favoriteDrinks.length && (
            <ButtonLoadMore onClick={seeMoreDrinks} />
          )}
        </>
      ) : (
        <EmptyFavoritePage />
      )}
    </>
  );
};
