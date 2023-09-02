import { CategoryRecipesItem } from 'components';
import { DrinksList } from './DrinksList.styled';
import { useSelector } from 'react-redux';
import { getDrinksByQuery } from 'redux/drinks';

export const DrinkList = ({ drinks }) => {
  return (
    <DrinksList>
      {drinks.map(data => (
        <CategoryRecipesItem key={data._id} data={data} />
      ))}
    </DrinksList>
  );
};
