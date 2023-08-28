export const selectRecipes = {
  data: state => state.recipes.items,
  recipe: state => state.recipes.recipe,
  isLoading: state => state.recipes.isLoading,
  error: state => state.recipes.error,
};
