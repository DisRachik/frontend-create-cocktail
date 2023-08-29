import { DrinkListItem } from 'components';
import { DrinksList } from './DrinksList.styled';

export const DrinkList = queryData => {
  return (
    <DrinksList>
      <DrinkListItem queryData={queryData} />
    </DrinksList>
  );
};
