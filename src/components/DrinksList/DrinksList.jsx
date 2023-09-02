import { CategoryRecipesItem } from 'components';
import { DrinksList } from './DrinksList.styled';
import { useSelector } from 'react-redux';
import { getDrinksByQuery } from 'redux/drinks';

export const DrinkList = () => {
  const { drinks } = useSelector(getDrinksByQuery);
  // const drinksArr = drinks || [];
  console.log(drinks);

  return (
    <DrinksList>
      {drinks.drinks.map(data => (
        <CategoryRecipesItem key={data._id} data={data} />
      ))}
    </DrinksList>
  );
};
