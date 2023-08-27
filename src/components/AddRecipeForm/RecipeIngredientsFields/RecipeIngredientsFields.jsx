// Libs
import { Controller, useFieldArray } from 'react-hook-form';
import Select from 'react-select';
import PropTypes from 'prop-types';
// Components
import { FieldsCounter } from './FieldsCounter/FieldsCounter';
// Styled components
import { SelectList } from './RecipeIngredientsFields.styled';
// Constants
const MIN_FIELDS_COUNT = 2;

export const RecipeIngredientsFields = ({
  control,
  errors,
  ingredientsList,
  measureList,
  state,
  handleMultipleSelectChange,
}) => {
  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
  });

  const handleAddField = () => {
    append({ title: '', measure: '' });

    handleMultipleSelectChange('ingredients');
  };

  const handleRemoveField = index => {
    if (fields.length === MIN_FIELDS_COUNT) return;

    remove(index);

    handleMultipleSelectChange('ingredients');
  };

  return (
    <>
      <h2>Ingredients</h2>

      <FieldsCounter
        fields={fields}
        handleAddField={handleAddField}
        handleRemoveField={handleRemoveField}
      />

      <SelectList>
        {fields.map((field, index) => {
          return (
            <li key={field.id} style={{ display: 'flex' }}>
              <Controller
                name={`ingredients.${index}.title`}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Select from options..."
                    options={ingredientsList}
                    defaultValue={state.ingredients[index]}
                    onChange={selectedOption => {
                      field.onChange(selectedOption);
                      handleMultipleSelectChange('ingredients');
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
                    placeholder="Select from options..."
                    options={measureList}
                    defaultValue={state.ingredients[index]}
                    onChange={selectedOption => {
                      field.onChange(selectedOption);
                      handleMultipleSelectChange('ingredients');
                    }}
                  />
                )}
              />

              <button type="button" onClick={() => handleRemoveField(index)}>
                X
              </button>
            </li>
          );
        })}

        {errors.ingredients?.length > 0 && (
          <p style={{ color: 'deeppink' }}>
            {'Provide at least 2 ingredients'}
          </p>
        )}
      </SelectList>
    </>
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
  handleMultipleSelectChange: PropTypes.func.isRequired,
};
