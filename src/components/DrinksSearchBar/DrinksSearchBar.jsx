import { Controller } from 'react-hook-form';
import {
  Form,
  Input,
  SearchBtn,
  Selector,
  selectStyles,
} from './DrinksSearchBar.styled';

export const DrinkSearchBar = ({
  onSubmit,
  control,
  categories,
  ingredients,
  onChangeCategory,
  onChangeIngredient,
  initialCategory,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <SearchBtn type="submit"></SearchBtn>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="All Categories"
            unstyled
            {...field}
            styles={selectStyles}
            options={categories.map(option => ({
              value: option.title,
              label: option.title,
            }))}
            defaultValue={initialCategory}
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
            unstyled
            styles={selectStyles}
            {...field}
            options={ingredients.map(option => ({
              value: option.title,
              label: option.title,
            }))}
            defaultValue={initialCategory}
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
