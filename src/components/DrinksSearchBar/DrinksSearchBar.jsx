import PropTypes from 'prop-types';
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
  ingredientsList,
  categoriesList,
  onChangeCategory,
  onChangeIngredient,
  initialCategory,
  initialIngredient,
}) => {
  const defCategory = {
    value: initialCategory,
    label: initialCategory,
  };
  const defIngredient = {
    value: initialIngredient,
    label: initialIngredient,
  };

  const setListCategories = categoriesList.map(option => ({
    value: option.title,
    label: option.title,
  }));

  const setListIngredients = ingredientsList.map(option => ({
    value: option.title,
    label: option.title,
  }));

  return (
    <Form onSubmit={onSubmit} autoComplete="off">
      <SearchFieldWrap>
        <Controller
          name="drink"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter the text" autocomplete="off" />
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
            options={setListCategories}
            value={
              initialCategory && initialCategory.length > 0
                ? defCategory
                : 'All Categories'
            }
            onChange={selectedOption => {
              field.onChange(selectedOption);
              onChangeCategory(selectedOption.value);
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
            options={setListIngredients}
            value={
              initialIngredient && initialIngredient.length > 0
                ? defIngredient
                : 'ingredients'
            }
            onChange={selectedOption => {
              field.onChange(selectedOption);
              onChangeIngredient(selectedOption.value);
            }}
          />
        )}
      />
    </Form>
  );
};

DrinkSearchBar.propTypes = {
  onSubmit: PropTypes.func,
  control: PropTypes.object,
  ingredientsList: PropTypes.array,
  categoriesList: PropTypes.array,
  onChangeCategory: PropTypes.func,
  onChangeIngredient: PropTypes.func,
  initialCategory: PropTypes.string,
  initialIngredient: PropTypes.string,
};
