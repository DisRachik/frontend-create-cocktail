import { Controller, useForm } from 'react-hook-form';
import { Form, Input, Selector, selectStyles } from './DrinksSearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../redux';
import { selectIngredients } from '../../redux';
import { fetchDrinksByQuery } from 'redux/drinks';

export const DrinkSearchBar = ({ drinksPerPage, currentPage }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      search: '',
      category: null,
      ingredients: null,
    },
  });
  const categories = useSelector(selectCategories.data);
  const ingredients = useSelector(selectIngredients.data);

  const onSubmit = async () => {
    const formData = getValues();
    const { search, category, ingredients } = formData;
    const searchValue = search || '';
    const categoryValue = category ? category.value : '';
    const ingridientValue = ingredients ? ingredients.value : '';
    console.log(formData);
    const querySearch = {
      search: searchValue,
      category: categoryValue,
      ingredients: ingridientValue,
      limit: drinksPerPage,
      page: currentPage,
    };
    dispatch(fetchDrinksByQuery(querySearch));
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
        name="category"
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
            onChange={selectedOption => {
              field.onChange(selectedOption);
              const req = {
                category: selectedOption.value,
              };
              dispatch(fetchDrinksByQuery(req));
            }}
          />
        )}
      />
      <Controller
        name="ingredients"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="Ingredients"
            styles={selectStyles}
            {...field}
            options={ingredients.map(option => ({
              value: option.title,
              label: option.title,
            }))}
            onChange={selectedOption => {
              field.onChange(selectedOption);
              const req = {
                ingredients: selectedOption.value,
              };
              dispatch(fetchDrinksByQuery(req));
            }}
          />
        )}
      />
    </Form>
  );
};
