import PropTypes from 'prop-types';
import {
  CategoryItem,
  ImageDrinks,
  SeeIngredients,
  TitleDrinks,
  TextContainer,
} from './CategoryRecipesItem.styled';

export const CategoryRecipesItem = ({
  data: { drink,  drinkThumb, _id },
}) => {
  console.log( "CategoryRecipesItem _id" ,_id, drink,  drinkThumb);
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
    action: PropTypes.func.isRequired,
  }),
};