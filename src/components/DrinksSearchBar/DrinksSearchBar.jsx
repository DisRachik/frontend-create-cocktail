import { Controller } from 'react-hook-form';
import { Form, Input, Selector, selectStyles } from './DrinksSearchBar.styled';

export const DrinkSearchBar = ({
  categories,
  ingridients,
  control,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
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
