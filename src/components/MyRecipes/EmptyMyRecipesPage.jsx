import drink from 'img/mobile-yellow-drink.png';
import drinkMedium from 'img/tablet-yellow-drink.png';
import {
  ContainerImgAndText,
  Text,
} from '../Favorite/EmptyFavoritePage.styled';

export const EmptyMyRecipesPage = () => {
  return (
    <ContainerImgAndText>
      <picture>
        <source srcSet={drink} media="(max-width: 767px)" />
        <source srcSet={drinkMedium} media="(min-width: 768px)" />
        <img src={drink} alt="cocktail" />
      </picture>
      <Text>You don't have your recipes</Text>
    </ContainerImgAndText>
  );
};
