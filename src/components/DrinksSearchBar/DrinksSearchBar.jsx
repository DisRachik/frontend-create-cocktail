import { Controller, useForm } from 'react-hook-form';
import { Form, Input, Selector, selectStyles } from './DrinksSearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrinksByQuery } from 'redux/drinks';

export const DrinkSearchBar = ({
  onSubmit,
  control,
  categories,
  ingredients,
  onChangeCategory,
  onChangeIngredient,
  initialCategory,
}) => {
  console.log(initialCategory);
  return (
    <Form onSubmit={onSubmit}>
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
            // defaultValue={initialCategory || ''}
            onChange={selectedOption => {
              field.onChange(selectedOption);
              onChangeCategory(selectedOption);
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
              onChangeIngredient(selectedOption);
            }}
          />
        )}
      />
    </Form>
  );
};
