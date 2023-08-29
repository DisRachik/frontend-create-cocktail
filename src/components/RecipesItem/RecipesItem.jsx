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
// Icons
import { RiDeleteBinLine } from 'react-icons/ri';

export const RecipesItem = ({
  data: { drink, instructions, drinkThumb, _id },
}) => {
  return (
    <FavoriteItem>
      <ImageDrinks loading="lazy" src={drinkThumb} alt="" />
      <TitleDrinks>{drink}</TitleDrinks>
      <Text>Ingredients</Text>
      <DescriptionDrinks>{instructions}</DescriptionDrinks>
      <BatonsContainer>
        <SeeRecipe to={`/recipe/${_id}`}>See recipe</SeeRecipe>
        <DeleteFavoriteDrinksBtn type="button">
          <RiDeleteBinLine />
        </DeleteFavoriteDrinksBtn>
      </BatonsContainer>
    </FavoriteItem>
  );
};

RecipesItem.propTypes = {
  data: PropTypes.shape({
    drink: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
};
