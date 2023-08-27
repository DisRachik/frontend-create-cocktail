// Libs
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// Components
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { Button } from 'components';
// Styled components
import { Form } from './AddRecipeForm.styled';
// Helpers
import { transformSelectData } from 'helpers';
// Redux selectors
import {
  selectCategories,
  selectGlasses,
  selectIngredients,
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
} from '../../redux';
// Other
import { formSettings } from './formSettings';
import { initialValues } from './initialValues';
// Data
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

  const categories = useSelector(selectCategories.data);
  const glasses = useSelector(selectGlasses.data);
  const ingredients = useSelector(selectIngredients.data);

  const data = {
    categories: transformSelectData(categories),
    glasses: transformSelectData(glasses),
    ingredients: transformSelectData(ingredients),
    measure: measureList,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchCategories()),
      dispatch(fetchGlasses()),
      dispatch(fetchIngredients()),
    ]).catch(() =>
      console.error('Oops... Something went wrong :( Please try again later.')
    );
  }, [dispatch]);

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
        categoriesList={data.categories}
        glassesList={data.glasses}
        state={formState}
        handleInputChange={handleInputChange}
        handleSingleSelectChange={handleSingleSelectChange}
      />

      <RecipeIngredientsFields
        control={control}
        errors={errors}
        ingredientsList={data.ingredients}
        measureList={data.measure}
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
