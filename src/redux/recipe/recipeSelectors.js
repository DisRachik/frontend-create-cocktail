export const selectRecipe = {
  recipe: state => state.recipe.recipe,
  isLoading: state => state.recipe.isLoading,
  error: state => state.recipe.error,
};
