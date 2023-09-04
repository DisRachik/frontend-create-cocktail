import PropTypes from 'prop-types';
import { CategoryRecipesItem } from 'components';
import { DrinksList } from './DrinksList.styled';

export const DrinkList = ({ drinks }) => {
  return (
    <DrinksList>
      {drinks.map(data => (
        <CategoryRecipesItem key={data._id} data={data} />
      ))}
    </DrinksList>
  );
};

DrinkList.propTypes = {
  drinks: PropTypes.array,
};
