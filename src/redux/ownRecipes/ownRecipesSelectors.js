export const selectOwnRecipes = {
  data: state => state.ownRecipes.items,
  isLoading: state => state.ownRecipes.isLoading,
  error: state => state.ownRecipes.error,
};
