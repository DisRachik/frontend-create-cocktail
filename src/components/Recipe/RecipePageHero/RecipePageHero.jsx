import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { toast } from 'react-toastify';
import { deleteFromFavorites, addToFavorites } from 'api';

import defaultImageUrl from 'img/thumb400x400.png';

import { Button } from 'components';
import {
  HeroWrap,
  LeftSideWrap,
  CocktailGlass,
  CocktailTitle,
  CocktailDescription,
  CocktailImage,
} from './RecipePageHero.styled';

import { lostRecipeDesc } from 'constans';
import { praiseModal } from 'helpers/praiseModal';
import { MotivationModal } from 'components';

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
  const [praiseText, setPraiseText] = useState(null);
  const [counterFavorite, setCounterFavorite] = useState(null);
  const user = useSelector(selectUser);

  useEffect(() => {
    setDrinkFavoriteUsers(favorites);
  }, [favorites]);

  const handleToggleFavoriteStatus = async () => {
    setIsLoading(true);

    try {
      const isFavorite = drinkFavoriteUsers.some(
        favorite => favorite.userId === user._id
      );

      if (isFavorite) {
        await deleteFromFavorites(recipeId).then(response => {
          toast.success(response.message);
          setPraiseText(null);
        });
        setDrinkFavoriteUsers(newFavorites =>
          newFavorites.filter(favorite => favorite.userId !== user._id)
        );
      } else {
        await addToFavorites(recipeId).then(response => {
          setCounterFavorite(response.totalCountAddedByUser);
          setPraiseText(
            praiseModal(response.totalCountAddedByUser, 'favorite')
          );
          toast.success(response.message);
        });
        setDrinkFavoriteUsers(newFavorites => [
          ...newFavorites,
          { userId: user._id, addedAt: Date.now() },
        ]);
      }
    } catch (error) {
      toast.error(error.message);
      console.error('An error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFavorite =
    drinkFavoriteUsers &&
    drinkFavoriteUsers.some(favorite => favorite.userId === user._id);

  return (
    <HeroWrap>
      <LeftSideWrap>
        {praiseText && (
          <MotivationModal
            text={praiseText}
            favorite
            counter={counterFavorite}
          />
        )}
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
