import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Selector, selectStyles } from './DrinksSearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchIngredients,
  selectCategories,
} from '../../redux';
import { selectIngredients } from '../../redux';
import { useEffect } from 'react';

export const DrinkSearchBar = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      search: '',
      categories: null,
      ingridients: null,
    },
  });
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, [dispatch]);

  const categories = useSelector(selectCategories.data);
  const ingridients = useSelector(selectIngredients.data);

  const onSubmit = async () => {
    const formData = getValues();
    // const { search, categories, ingridients } = formData;
    // const searchValue = search || '';
    // const categoryValue = categories ? categories.value : '';
    // const ingridientValue = ingridients ? ingridients.value : '';
    console.log(formData);

    // if (searchValue && categoryValue && ingridientValue) {
    //   getDrinksByQuery(searchValue, categoryValue, ingridientValue)
    //     .then(data => setQueryData(data.results))
    //     .catch(() => window.alert('Network Error. Please, try again later'));
    // }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <button type="submit">ok</button>
      <Controller
        name="categories"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="All Categories"
            {...field}
            styles={selectStyles}
            options={categories.map(option => ({
              value: option.title,
              label: option.title,
            }))}
          />
        )}
      />
      <Controller
        name="ingridients"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="Ingridients"
            styles={selectStyles}
            {...field}
            options={ingridients.map(option => ({
              value: option.title,
              label: option.title,
            }))}
          />
        )}
      />
    </Form>
  );
};
