import { RecipesItem } from 'components';
import { FavoriteList } from './RecipesList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getAllDrinks } from 'redux/favorite/selectors';
import { fatchUserFavoritsDrinks } from 'api';
import { useEffect } from 'react';

export const RecipesList = () => {
  const dispatch = useDispatch();
  const { favoriteDrinks } = useSelector(getAllDrinks);

  useEffect(() => {
    dispatch(fatchUserFavoritsDrinks('64e9e5b0560e3b35a2a95c89'));
  }, [dispatch]);

  return (
    <FavoriteList>
      {favoriteDrinks.map(data => (
        <RecipesItem key={data._id} data={data} />
      ))}
    </FavoriteList>
  );
};
