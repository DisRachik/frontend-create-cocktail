import {
  IngredientsSection,
  SectionTitle,
  IngredientsList,
  IngredientsListItem,
  IngredientPicture,
  IngredientImage,
  IngredientDescWrap,
  IngredientTitle,
  IngredientMeasure,
} from './RecipeIngredientsList.styled';

const defaultImageUrl = require('../../../img/thumb220x220.png');

export const RecipeIngredientsList = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <IngredientsSection>
      <SectionTitle>{'Ingredients'}</SectionTitle>
      <IngredientsList>
        {ingredients.map((element, index) => (
          <IngredientsListItem key={element.title + index}>
            <IngredientPicture>
              <source
                media="(max-width: 768px)"
                srcSet={element['thumb-small'] || defaultImageUrl}
              />
              <source
                media="(min-width: 769px)"
                srcSet={element['thumb-medium'] || defaultImageUrl}
              />
              <IngredientImage
                src={element['thumb-medium'] || defaultImageUrl}
                alt={element.title}
              />
            </IngredientPicture>
            <IngredientDescWrap>
              <IngredientTitle>{element.title}</IngredientTitle>
              {element.measure && (
                <IngredientMeasure>{element.measure}</IngredientMeasure>
              )}
            </IngredientDescWrap>
          </IngredientsListItem>
        ))}
      </IngredientsList>
    </IngredientsSection>
  );
};
