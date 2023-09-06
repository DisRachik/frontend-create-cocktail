// Libs
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// Components
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { Backdrop, Button, Spinner } from 'components';
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
} from '../../redux';
// Api
import { addRecipe } from 'api';
// Other
import { formSettings } from './formSettings';
import { initialValues } from './initialValues';
import { allowedImagesMimeTypes } from 'constans';
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
  const [isLoading, setIsLoading] = useState(false);
  const [isAllowedFileType, setIsAllowedFileType] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories.data);
  const glasses = useSelector(selectGlasses.data);
  const ingredients = useSelector(selectIngredients.data);

  const data = {
    categories: transformSelectData(categories),
    glasses: transformSelectData(glasses),
    ingredients: transformSelectData(ingredients),
    measure: measureList,
  };

  useEffect(() => {
    Promise.all([
      dispatch(fetchCategories()),
      dispatch(fetchGlasses()),
      dispatch(fetchIngredients()),
    ]).catch(() =>
      toast.error('Oops... Something went wrong :( Please try again later.')
    );
  }, [dispatch]);

  const checkFileType = file => {
    const isAllowedFile = allowedImagesMimeTypes.includes(file.type);

    if (!isAllowedFile) {
      setIsAllowedFileType(false);
      toast.error('Invalid file type');
      return;
    } else {
      setIsAllowedFileType(true);
    }
  };

  const handleFormSubmit = async data => {
    if (!isAllowedFileType) {
      window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth',
      });
      return toast.error('Invalid file type.');
    }

    const reqBody = normalizeAddRecipeRequestData(
      data,
      ingredients,
      formState.drinkThumb
    );

    const formData = generateFormData(reqBody);

    try {
      setIsLoading(true);
      await addRecipe(formData);
      setFormState({ ...initialValues });
      reset({ ...initialValues });
      navigate('/my');
    } catch {
      toast.error('Oops... Something went wrong :( Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileInputChange = evt => {
    const fieldName = evt.target.name;
    const file = evt.target.files[0];

    setFormState(prevState => ({
      ...prevState,
      [fieldName]: file,
    }));

    if (file) checkFileType(file);
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
    <>
      {isLoading && (
        <Backdrop>
          <Spinner />
        </Backdrop>
      )}
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <RecipeDescriptionFields
          control={control}
          register={register}
          errors={errors}
          categoriesList={data.categories}
          glassesList={data.glasses}
          state={formState}
          isAllowedFileType={isAllowedFileType}
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
    </>
  );
};
