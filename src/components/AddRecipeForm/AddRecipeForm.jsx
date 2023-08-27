// Libs
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// Components
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { Button } from 'components';
// Styled components
import { Form } from './AddRecipeForm.styled';
// Helpers
import { transformSelectData } from 'helpers';
// Api
import { getCategories, getGlasses, getIngredients } from 'api';
// Other
import { formSettings } from './formSettings';
import { initialValues } from './initialValues';
// Data
import categoriesData from 'db/categories.json';
import glassesData from 'db/glasses.json';
import ingredientsData from 'db/ingredients.json';
// Data transformations
const categoriesList = transformSelectData(categoriesData);
const glassesList = transformSelectData(glassesData);
const ingredientsList = transformSelectData(ingredientsData);
const measureList = Array.from({ length: 30 }, (_, index) => {
  const value = index + 1;
  return { value: `${value}cl`, label: `${value}cl` };
});

export const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    clearErrors,
    setError,
    getValues,
    reset,
    formState: { errors },
  } = useForm(formSettings);

  const [formState, setFormState] = useState({ ...initialValues });

  useEffect(() => {
    return async () => {
      const categories = await getCategories();
      const glasses = await getGlasses();
      const ingredients = await getIngredients();
    };
  }, []);

  const handleFormSubmit = data => {
    data.instructions = data.instructions.split(/\r\n|\r|\n/g);

    console.log(data);

    setFormState({ ...initialValues });

    reset({ ...initialValues });
  };

  const handleInputChange = (fieldName, value) => {
    value ? clearErrors(fieldName) : setError(fieldName);

    setFormState(prevState => ({
      ...prevState,
      [fieldName]:
        fieldName === 'instructions' ? value.split(/\r\n|\r|\n/g) : value,
    }));
  };

  const handleSingleSelectChange = (fieldName, value) => {
    setFormState(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleMultipleSelectChange = fieldName => {
    const ingredients = getValues(fieldName);

    setFormState(prevState => ({
      ...prevState,
      ingredients: [...ingredients],
    }));
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <RecipeDescriptionFields
        control={control}
        register={register}
        errors={errors}
        categoriesList={categoriesList}
        glassesList={glassesList}
        state={formState}
        handleInputChange={handleInputChange}
        handleSingleSelectChange={handleSingleSelectChange}
      />

      <RecipeIngredientsFields
        control={control}
        errors={errors}
        ingredientsList={ingredientsList}
        measureList={measureList}
        state={formState}
        handleMultipleSelectChange={handleMultipleSelectChange}
      />

      <RecipePreparationFields
        register={register}
        errors={errors}
        state={formState}
        handleInputChange={handleInputChange}
      />

      <Button minWidth="107px" type="submit">
        Add
      </Button>
    </Form>
  );
};
