export const selectRecipes = {
  data: state => state.Recipes.items,
  recipe: state => state.Recipes.recipe,
  isLoading: state => state.Recipes.isLoading,
  error: state => state.Recipes.error,
};
