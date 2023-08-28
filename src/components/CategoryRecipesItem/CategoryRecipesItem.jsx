
import {
  CategoryItem,
  ImageDrinks,
  Text,
  TitleDrinks,
  TextContainer,
} from './CategoryRecipesItem.styled';

export const CategoryRecipesItem = ({
  data: { drink, instructions, drinkThumb, _id },
}) => {
  return (
    <CategoryItem>
      <ImageDrinks loading="lazy" src={drinkThumb} alt="" />
      <TextContainer>
      <TitleDrinks>{drink}</TitleDrinks>
      <Text>Ingredients</Text>
      </TextContainer>
    </CategoryItem>
  );
};
