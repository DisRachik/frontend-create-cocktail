import PropTypes from 'prop-types';
import { RecipesItem } from 'components';
import { FavoriteList } from './RecipesList.styled';

export const RecipesList = ({ array, action, params }) => {
  return (
    <>
      <FavoriteList>
        {array.map(data => (
          <RecipesItem
            key={data._id}
            data={data}
            action={action}
            params={params}
          />
        ))}
      </FavoriteList>
    </>
  );
};

RecipesList.propTypes = {
  array: PropTypes.array,
  action: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};
