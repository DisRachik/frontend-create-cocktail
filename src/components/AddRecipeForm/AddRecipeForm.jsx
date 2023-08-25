// Libs
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// Components
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
// Styled components
import { Form } from './AddRecipeForm.styled';
// Helpers
import { transformSelectData } from 'helpers';
// Other
import { formSettings } from './formSettings';
import { initialValues } from './initialValues';
// Data
import categoriesData from 'db/categories.json';
import glassesData from 'db/glasses.json';
import ingredientData from 'db/ingredients.json';
// Data transformations
const categoriesList = transformSelectData(categoriesData);
const glassesList = transformSelectData(glassesData);
const ingredientList = transformSelectData(ingredientData);
const amountList = Array.from({ length: 30 }, (_, index) => {
  const value = index + 1;
  return { value: `${value}cl`, label: `${value}cl` };
});

export const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(formSettings);

  const [formState, setFormState] = useState({ ...initialValues });

  const handleFormSubmit = data => {
    console.log(data);

    setFormState(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <RecipeDescriptionFields
        control={control}
        register={register}
        errors={errors}
        categoriesList={categoriesList}
        glassesList={glassesList}
      />

      <RecipeIngredientsFields
        control={control}
        errors={errors}
        ingredientList={ingredientList}
        amountList={amountList}
      />

      <RecipePreparationFields register={register} errors={errors} />

      <button type="submit">Add</button>
    </Form>
  );
};
