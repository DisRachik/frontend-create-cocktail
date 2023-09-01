import { CategoryRecipesList, } from 'components';

import {   fetchMainRecipes } from 'redux/mainRecipes/mainRecipesOperations';
import { selectMainRecipes,} from 'redux/mainRecipes/mainRecipesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export const CategoryRecipesPage = ({ category }) => {
 const dispatch = useDispatch();
    const mainRecipes = useSelector(state => state.mainRecipes.mainRecipes);
    
  
    function flattenArray(twoDimensionalArray) {
    const flattenedArray = [];
    for (let i = 0; i < twoDimensionalArray.length; i++) {
        for (let j = 0; j < twoDimensionalArray[i].length; j++) {
            flattenedArray.push(twoDimensionalArray[i][j]);
        }
    }
        return flattenedArray;      
}
const flattenedArray = flattenArray(mainRecipes);
console.log("flattenedArray",flattenedArray);
const filteredArray = flattenedArray.filter(recipe => recipe.category === category);


  useEffect(() => {
    dispatch(fetchMainRecipes());
  }, [dispatch]);
  return (
    <>
      <CategoryRecipesList array={filteredArray }/>
    
    </>
  );
};
