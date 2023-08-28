import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  IngredientsWrap,
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
  return (
    <IngredientsWrap>
      <SectionTitle>{'Ingredients'}</SectionTitle>
      <IngredientsList>
        {ingredients &&
          ingredients.map(element => (
            <IngredientsListItem key={nanoid()}>
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
    </IngredientsWrap>
  );
};

RecipeIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      'thumb-small': PropTypes.string,
      'thumb-medium': PropTypes.string,
      title: PropTypes.string.isRequired,
      measure: PropTypes.string,
    })
  ),
};
