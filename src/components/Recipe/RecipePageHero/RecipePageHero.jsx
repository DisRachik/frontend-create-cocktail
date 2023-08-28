import PropTypes from 'prop-types';

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
  favorite,
  drinkImage,
}) => {
  return (
    <HeroWrap>
      <LeftSideWrap>
        <CocktailGlass>{glass ? glass : 'N/A'}</CocktailGlass>
        <CocktailTitle>{drink ? drink : 'N/A'}</CocktailTitle>
        <CocktailDescription>
          {desc ? { desc } : lostRecipeDesc}
        </CocktailDescription>
        <Button minHeight={'46px'}>
          {favorite ? 'Remove from favorite' : 'Add to favorite recipe'}
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
  favorite: PropTypes.bool,
  drinkImage: PropTypes.string,
};
