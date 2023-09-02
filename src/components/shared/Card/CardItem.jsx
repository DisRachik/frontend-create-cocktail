import PropTypes from 'prop-types';
import {
  CategoryItem,
  ImageDrinks,
  SeeIngredients,
  TitleDrinks,
  TextContainer,
} from './CardItem.styled';
// const defaultImageUrl = require('../../img/thumb400x400.png');



export const CategoryRecipesItem = ({
  data: { drink,  drinkThumb, _id },
}) => {

  return (
    <CategoryItem>
      <ImageDrinks loading="lazy" src={drinkThumb} alt="" />
      <TextContainer>
      <TitleDrinks>{drink}</TitleDrinks>
      <SeeIngredients to={`/recipe/${_id}`}>Ingredients</SeeIngredients>
      </TextContainer>
    </CategoryItem>
  );
};

CategoryRecipesItem.propTypes = {
  data: PropTypes.shape({
    drink: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    
  }),
};