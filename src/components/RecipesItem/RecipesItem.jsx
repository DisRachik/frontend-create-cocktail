// Libs
import PropTypes from 'prop-types';
// Styled components

import {
  BatonsContainer,
  DeleteFavoriteDrinksBtn,
  DescriptionDrinks,
  FavoriteItem,
  ImageDrinks,
  SeeRecipe,
  Text,
  TitleDrinks,
} from './RecipesItem.styled';

import defaultImageUrl from '../../img/thumb400x400.png';

// Icons
import { RiDeleteBinLine } from 'react-icons/ri';

export const RecipesItem = ({
  data: { drink, instructions, drinkThumb, _id },
  action,
}) => {
  return (
    <FavoriteItem>
      <ImageDrinks
        loading="lazy"
        src={drinkThumb || defaultImageUrl}
        alt="drink"
      />
      <TitleDrinks>{drink ? drink : 'N/a'}</TitleDrinks>
      <Text>Ingredients</Text>
      <DescriptionDrinks>
        {instructions ? instructions : 'N/a'}
      </DescriptionDrinks>
      <BatonsContainer>
        <SeeRecipe to={`/recipe/${_id}`}>See recipe</SeeRecipe>
        <DeleteFavoriteDrinksBtn type="button" onClick={() => action(_id)}>
          <RiDeleteBinLine />
        </DeleteFavoriteDrinksBtn>
      </BatonsContainer>
    </FavoriteItem>
  );
};

RecipesItem.propTypes = {
  data: PropTypes.shape({
    drink: PropTypes.string.isRequired,
    instructions: PropTypes.array.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    action: PropTypes.func,
  }),
};
