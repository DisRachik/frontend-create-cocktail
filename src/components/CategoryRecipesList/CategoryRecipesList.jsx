import PropTypes from 'prop-types';
import { CategoryRecipesItem } from 'components';
import { CatigoryList } from './CategoryRecipesList.styled';

export const CategoryRecipesList = ({ category,mainRecipes }) => {
  const filteredArray = mainRecipes.filter(
    recipe => recipe.category === category
  ); 

  return (
    <CatigoryList>
      {filteredArray.map(data => (
        <CategoryRecipesItem key={data._id} data={data} />
      ))}
    </CatigoryList>
  );
};

CategoryRecipesList.propTypes = {
  mainRecipes: PropTypes.array,
  category: PropTypes.string.isRequired,
};
