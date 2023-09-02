// Libs
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Components
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { Button } from 'components';
// Styled components
import { Form } from './AddRecipeForm.styled';
// Helpers
import {
  transformSelectData,
  generateFormData,
  normalizeAddRecipeRequestData,
} from 'helpers';
// Redux
import {
  selectCategories,
  selectGlasses,
  selectIngredients,
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
  addOwnRecipe,
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
  const navigate = useNavigate();

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

  const handleFormSubmit = async data => {
    const reqBody = normalizeAddRecipeRequestData(
      data,
      ingredients,
      formState.drinkThumb
    );
    const formData = generateFormData(reqBody);

    try {
      const response = await dispatch(addOwnRecipe(formData));

      if (response.error) {
        throw new Error(response.payload);
      } else {
        setFormState({ ...initialValues });
        reset({ ...initialValues });
        navigate('/my');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileInputChange = evt => {
    const fieldName = evt.target.name;
    const value = evt.target.files[0];

    setFormState(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleInputChange = evt => {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    value ? clearErrors(fieldName) : setError(fieldName);

    setFormState(prevState => ({
      ...prevState,
      [fieldName]:
        fieldName === 'instructions' ? value.split(/\r\n|\r|\n/g) : value,
    }));
  };

  const handleSelectChange = fieldName => {
    const data = getValues(fieldName);
    const value = Array.isArray(data) ? [...data] : data;

    setFormState(prevState => ({
      ...prevState,
      [fieldName]: value,
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
        handleFileInputChange={handleFileInputChange}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
      />

      <RecipeIngredientsFields
        control={control}
        errors={errors}
        ingredientsList={data.ingredients}
        measureList={data.measure}
        state={formState}
        handleSelectChange={handleSelectChange}
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
