import PropTypes from 'prop-types';
import { CategoryRecipesItem } from 'components';
import { CatigoryList } from './CategoryRecipesList.styled';


import drinks from './cocktails.json';

const drinksSlise = [...drinks].slice(0, 3);

 


// const categoriesSlise = [...categories].slice(0, 4);
export const CategoryRecipesList = ({ array }) => {
    const array1 = [...array].slice(0,3);
    console.log("array 1   from CategoryRecipesList", array1); 
   
  return (
    <CatigoryList>
      {array1.map(data => (
        <CategoryRecipesItem key={data._id} data={data} />
      ))}
    </CatigoryList>
  );
};

CategoryRecipesList.propTypes = {
  array: PropTypes.array,
};
