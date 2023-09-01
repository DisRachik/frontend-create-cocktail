import { useDispatch, useSelector } from 'react-redux';
import { Section, RecipesList, EmptyAndError } from 'components';

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

const Favorite = () => {
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
      <Section title="Favorites">
        {favoriteDrinks.length !== 0 ? (
          <>
            <RecipesList array={favoriteDrinks} action={handleClick} />
            {TotalHitsFavorite > favoriteDrinks.length && (
              <ButtonLoadMore onClick={seeMoreDrinks} />
            )}
          </>
        ) : (
          <EmptyAndError text="You haven`t added any favorite cocktails yet" />
        )}
      </Section>
    </>
  );
};

export default Favorite;
