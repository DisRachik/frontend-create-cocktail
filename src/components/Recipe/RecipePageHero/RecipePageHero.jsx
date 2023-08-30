import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { getFavoriteLoading } from 'redux/favorite/selectors';
import { changeFavoriteStatus } from 'redux/favorite/operations';

import { Button } from '../../shared/Button/Button';
import {
  HeroWrap,
  LeftSideWrap,
  CocktailGlass,
  CocktailTitle,
  CocktailDescription,
  CocktailImage,
} from './RecipePageHero.styled';

import { lostRecipeDesc } from 'constans';

const defaultImageUrl = require('../../../img/thumb400x400.png');

export const RecipePageHeader = ({
  glass,
  drink,
  desc,
  recipeId,
  favorites,
  drinkImage,
}) => {
  const [drinkFavoriteUsers, setDrinkFavoriteUsers] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(getFavoriteLoading);

  useEffect(() => {
    setDrinkFavoriteUsers(favorites);
  }, [favorites]);

  const handleChangeFavoriteStatus = () => {
    dispatch(changeFavoriteStatus(recipeId))
      .then(() => {
        setDrinkFavoriteUsers(newFavorites => {
          if (newFavorites.includes(user._id)) {
            return newFavorites.filter(id => id !== user._id);
          } else {
            return [...newFavorites, user._id];
          }
        });
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };

  const isFavorite =
    drinkFavoriteUsers && drinkFavoriteUsers.includes(user._id);

  return (
    <HeroWrap>
      <LeftSideWrap>
        <CocktailGlass>{glass ? glass : 'N/A'}</CocktailGlass>
        <CocktailTitle>{drink ? drink : 'N/A'}</CocktailTitle>
        <CocktailDescription>
          {desc ? desc : lostRecipeDesc}
        </CocktailDescription>
        <Button
          minHeight={'46px'}
          onClick={handleChangeFavoriteStatus}
          disabled={isLoading}
        >
          {isFavorite
            ? 'Remove from favorite recipes'
            : 'Add to favorite recipes'}
        </Button>
      </LeftSideWrap>
      <CocktailImage
        src={drinkImage || defaultImageUrl}
        alt={drink}
      ></CocktailImage>
    </HeroWrap>
  );
};

RecipePageHeader.propTypes = {
  glass: PropTypes.string,
  drink: PropTypes.string,
  desc: PropTypes.string,
  favorite: PropTypes.array,
  drinkImage: PropTypes.string,
};
