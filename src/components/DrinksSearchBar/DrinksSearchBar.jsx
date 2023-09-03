import { Controller } from 'react-hook-form';
import {
  Form,
  SearchFieldWrap,
  Input,
  SearchBtn,
  Selector,
  selectStyles,
} from './DrinksSearchBar.styled';
import { LuSearch } from 'react-icons/lu';

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
      <SearchFieldWrap>
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter the text" />
          )}
        />
        <SearchBtn type="submit">
          <LuSearch style={{ width: 20, height: 20 }} />
        </SearchBtn>
      </SearchFieldWrap>
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
