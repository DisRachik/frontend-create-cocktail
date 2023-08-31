import { DrinkListItem } from 'components';
import { DrinksList } from './DrinksList.styled';

export const DrinkList = ({ currentDrinks }) => {
  return (
    <DrinksList>
      <DrinkListItem currentDrinks={currentDrinks} />
    </DrinksList>
  );
};
