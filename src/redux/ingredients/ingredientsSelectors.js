export const selectIngredients = {
  data: state => state.ingredients.items,
  isLoading: state => state.ingredients.isLoading,
  error: state => state.ingredients.error,
};
