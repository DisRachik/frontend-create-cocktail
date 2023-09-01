// Libs
import { Controller, useFieldArray } from 'react-hook-form';
import Select from 'react-select';
import PropTypes from 'prop-types';
// Components
import { FieldsCounter } from './FieldsCounter/FieldsCounter';
// Styled components
import {
  IngredientsBox,
  TitleWrapper,
  IngredientsTitle,
  SelectList,
  SelectListItem,
  RemoveDtn,
  selectStyles,
  measureSelectStyles,
} from './RecipeIngredientsFields.styled';
// Icons
import { IoMdClose } from 'react-icons/io';
// Constants
const MIN_FIELDS_COUNT = 2;

export const RecipeIngredientsFields = ({
  control,
  errors,
  ingredientsList,
  measureList,
  state,
  handleSelectChange,
}) => {
  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
  });

  const handleAddField = () => {
    append({ title: '', measure: '' });

    handleSelectChange('ingredients');
  };

  const handleRemoveField = index => {
    if (fields.length === MIN_FIELDS_COUNT) return;

    remove(index);

    handleSelectChange('ingredients');
  };

  return (
    <IngredientsBox>
      <TitleWrapper>
        <IngredientsTitle>Ingredients</IngredientsTitle>
        <FieldsCounter
          fields={fields}
          handleAddField={handleAddField}
          handleRemoveField={handleRemoveField}
        />
      </TitleWrapper>

      <SelectList>
        {fields.map((field, index) => {
          return (
            <SelectListItem key={field.id}>
              <Controller
                name={`ingredients.${index}.title`}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Select from options..."
                    unstyled
                    styles={selectStyles}
                    options={ingredientsList}
                    defaultValue={state.ingredients[index]}
                    onChange={selectedOption => {
                      field.onChange(selectedOption);
                      handleSelectChange('ingredients');
                    }}
                  />
                )}
              />

              <Controller
                name={`ingredients.${index}.measure`}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Select..."
                    unstyled
                    styles={measureSelectStyles}
                    options={measureList}
                    defaultValue={state.ingredients[index]}
                    onChange={selectedOption => {
                      field.onChange(selectedOption);
                      handleSelectChange('ingredients');
                    }}
                  />
                )}
              />

              <RemoveDtn type="button" onClick={() => handleRemoveField(index)}>
                <IoMdClose size={18} />
              </RemoveDtn>
            </SelectListItem>
          );
        })}
      </SelectList>

      {errors.ingredients?.length > 0 && (
        <p style={{ color: 'deeppink' }}>{'Provide at least 2 ingredients'}</p>
      )}
    </IngredientsBox>
  );
};

RecipeIngredientsFields.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  ingredientsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  measureList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  state: PropTypes.shape({
    about: PropTypes.string.isRequired,
    category: PropTypes.object,
    drink: PropTypes.string.isRequired,
    drinkThumb: PropTypes.object,
    glass: PropTypes.object,
    ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};
