import { CategoryRecipesList, } from 'components';

import {   fetchMainRecipes } from 'redux/mainRecipes/mainRecipesOperations';
import { selectMainRecipes,} from 'redux/mainRecipes/mainRecipesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export const CategoryRecipesPage = () => {
 const dispatch = useDispatch();
    const mainRecipes = useSelector(state => state.mainRecipes.mainRecipes);
    const mainRecipes0 = mainRecipes[0];
    // const mainRecipes00 = mainRecipes0[0];
    // const xxx =mainRecipes0.map(data => (
    //     console.log( data._id )
    //   ))
    function getElement(array, row, column) {
    if (array[row] && array[row][column]) {
        return array[row][column];
    } else {
        return null; // or any default value if the element is not found
    }
}



// const row = 1; // Row number (starting from 0)
// const column = 2; // Column number (starting from 0)

// const element = getElement(mainRecipes, row, column);
// console.log("getElement",row, column,element);
    
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

//   console.log("CategoryRecipesPage mainRecipes============[0]",mainRecipes0 );

  useEffect(() => {
    dispatch(fetchMainRecipes());
  }, [dispatch]);
  return (
    <>
      <CategoryRecipesList array={flattenedArray }/>
    
    </>
  );
};
