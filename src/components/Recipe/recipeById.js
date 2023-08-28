import drinks from './cocktails.json';

export const recipeById = () => {
  const currentPath = window.location.pathname;
  const splitedPath = currentPath.split('/');
  const cocktailId = splitedPath[splitedPath.length - 1];
  const cocktailsDatabase = [...drinks];
  return cocktailsDatabase.find(cocktail => cocktail._id.$oid === cocktailId);
};
