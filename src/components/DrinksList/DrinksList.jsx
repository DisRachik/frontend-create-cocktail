import { CategoryRecipesItem } from 'components';
import { DrinksList } from './DrinksList.styled';
import { useSelector } from 'react-redux';
import { getDrinksByQuery } from 'redux/drinks';

export const DrinkList = () => {
  const { drinks } = useSelector(getDrinksByQuery);
  const drinkList = drinks.drinks || [];

  return (
    <DrinksList>
      {drinkList.map(data => (
        <CategoryRecipesItem key={data._id} data={data} />
      ))}
    </DrinksList>
  );
};
