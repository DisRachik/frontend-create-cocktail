// Libs
// import { nanoid } from 'nanoid';
import Select from 'react-select';
import { Controller, useFieldArray } from 'react-hook-form';
// Components
import { FieldsCounter } from './FieldsCounter/FieldsCounter';
// Styled components
import { SelectList } from './RecipeIngredientsFields.styled';
// Constants
const MIN_FIELDS_COUNT = 2;

export const RecipeIngredientsFields = ({
  control,
  errors,
  ingredientList,
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
                    options={ingredientList}
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
