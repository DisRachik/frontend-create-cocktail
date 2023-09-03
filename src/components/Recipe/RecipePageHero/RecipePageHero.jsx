import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { toast } from 'react-toastify';
import { deleteFromFavorites, addToFavorites } from 'api';

import defaultImageUrl from '../../../img/thumb400x400.png';

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

export const RecipePageHeader = ({
  glass = 'N/A',
  drink = 'N/A',
  desc = lostRecipeDesc,
  recipeId,
  favorites,
  drinkImage = defaultImageUrl,
}) => {
  const [drinkFavoriteUsers, setDrinkFavoriteUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    setDrinkFavoriteUsers(favorites);
  }, [favorites]);

  const handleToggleFavoriteStatus = async () => {
    setIsLoading(true);

    try {
      if (drinkFavoriteUsers.includes(user._id)) {
        await deleteFromFavorites(recipeId).then(response =>
          toast.success(response.message)
        );
        setDrinkFavoriteUsers(newFavorites =>
          newFavorites.filter(id => id !== user._id)
        );
      } else {
        await addToFavorites(recipeId).then(response =>
          toast.success(response.message)
        );
        setDrinkFavoriteUsers(newFavorites => [...newFavorites, user._id]);
      }
    } catch (error) {
      toast.error(error.message);
      console.error('An error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFavorite =
    drinkFavoriteUsers && drinkFavoriteUsers.includes(user._id);

  return (
    <HeroWrap>
      <LeftSideWrap>
        <CocktailGlass>{glass}</CocktailGlass>
        <CocktailTitle>{drink}</CocktailTitle>
        <CocktailDescription>{desc}</CocktailDescription>
        <Button
          minHeight={'46px'}
          onClick={handleToggleFavoriteStatus}
          disabled={isLoading}
        >
          {isFavorite
            ? 'Remove from favorite recipes'
            : 'Add to favorite recipes'}
        </Button>
      </LeftSideWrap>
      <CocktailImage src={drinkImage} alt={drink} />
    </HeroWrap>
  );
};

RecipePageHeader.propTypes = {
  glass: PropTypes.string,
  drink: PropTypes.string,
  desc: PropTypes.string,
  favorites: PropTypes.array,
  drinkImage: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
};
