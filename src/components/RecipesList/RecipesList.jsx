import PropTypes from 'prop-types';
import { RecipesItem } from 'components';
import { FavoriteList } from './RecipesList.styled';

export const RecipesList = ({ array }) => {
  console.log(array);
  return (
    <>
      <FavoriteList>
        {array.map(data => (
          <RecipesItem key={data._id} data={data} />
        ))}
      </FavoriteList>
    </>
  );
};

RecipesList.propTypes = {
  array: PropTypes.array,
};
