import drink from 'img/mobile-yellow-drink.png';
import drinkMedium from 'img/tablet-yellow-drink.png';
import { ContainerImgAndText, Text } from './EmptyFavoritePage.styled';

export const EmptyFavoritePage = () => {
  return (
    <ContainerImgAndText>
      <picture>
        <source srcset={drink} media="(max-width: 767px)" />
        <source srcset={drinkMedium} media="(min-width: 768px)" />
        <img src={drink} alt="cocktail" />
      </picture>
      <Text>You haven't added any favorite cocktails yet</Text>
    </ContainerImgAndText>
  );
};
