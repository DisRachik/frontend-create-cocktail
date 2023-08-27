import { Button } from '../../shared/Button/Button';
import {
  HeroWrap,
  LeftSideWrap,
  CocktailGlass,
  CocktailTitle,
  CocktailDescription,
  CocktailImage,
} from './RecipePageHero.styled';

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
        <CocktailGlass>{glass}</CocktailGlass>
        <CocktailTitle>{drink}</CocktailTitle>
        <CocktailDescription>
          {desc ? { desc } : 'This cocktail has no description yet'}
        </CocktailDescription>
        <Button minWidth={"223px"} minHeight={"46px"}>
          {favorite ? 'Remove from favorite' : 'Add to favorite recipe'}
        </Button>
      </LeftSideWrap>
      <CocktailImage src={drinkImage} alt={drink}></CocktailImage>
    </HeroWrap>
  );
};
