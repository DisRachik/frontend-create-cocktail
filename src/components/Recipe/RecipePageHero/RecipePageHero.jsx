import {
  HeroSection,
  LeftSideWrap,
  CocktailGlass,
  CocktailTitle,
  CocktailDescription,
  FavoriteButton,
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
    <HeroSection>
      <LeftSideWrap>
        <CocktailGlass>{glass}</CocktailGlass>
        <CocktailTitle>{drink}</CocktailTitle>
        <CocktailDescription>
          {desc ? { desc } : 'This cocktail has no description yet'}
        </CocktailDescription>
        <FavoriteButton>
          {favorite ? 'Remove from favorite recipe' : 'Add to favorite recipe'}
        </FavoriteButton>
      </LeftSideWrap>
      <CocktailImage src={drinkImage} alt={drink}></CocktailImage>
    </HeroSection>
  );
};
