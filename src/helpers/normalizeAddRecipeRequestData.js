export const normalizeAddRecipeRequestData = (data, allIngredients) => {
  const populatedIngredients = data.ingredients.map(ingredient => {
    const title = ingredient.title.value;
    const measure = ingredient.measure.value;
    const targetItem = allIngredients.find(item => item.title === title);

    if (targetItem) {
      return {
        title,
        measure,
        ingredientThumb: targetItem.ingredientThumb,
        'thumb-medium': targetItem['thumb-medium'],
        'thumb-small': targetItem['thumb-small'],
      };
    }

    return ingredient;
  });

  return {
    ...data,
    instructions: data.instructions.split(/\r\n|\r|\n/g),
    glass: data.glass.value,
    category: data.category.value,
    ingredients: populatedIngredients,
  };
};
