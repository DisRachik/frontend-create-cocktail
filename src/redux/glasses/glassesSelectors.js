export const selectGlasses = {
  data: state => state.glasses.items,
  isLoading: state => state.glasses.isLoading,
  error: state => state.glasses.error,
};
