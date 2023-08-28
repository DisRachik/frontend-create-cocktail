export const selectCategories = {
  data: state => state.categories.items,
  isLoading: state => state.categories.isLoading,
  error: state => state.categories.error,
};
