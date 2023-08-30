import PropTypes from 'prop-types';
import { RecipesItem } from 'components';
import { FavoriteList } from './RecipesList.styled';

export const RecipesList = ({ array, action }) => {
  return (
    <>
      <FavoriteList>
        {array.map(data => (
          <RecipesItem key={data._id} data={data} action={action} />
        ))}
      </FavoriteList>
    </>
  );
};

RecipesList.propTypes = {
  array: PropTypes.array,
  action: PropTypes.func.isRequired,
};
