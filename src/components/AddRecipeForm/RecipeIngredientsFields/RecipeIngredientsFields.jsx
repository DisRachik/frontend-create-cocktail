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
  amountList,
}) => {
  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
  });

  const handleAddField = () => append({ ingredient: '', amount: '' });

  const handleRemoveField = index => {
    if (fields.length === MIN_FIELDS_COUNT) return;

    remove(index);
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
                name={`ingredients.${index}.ingredient`}
                control={control}
                render={({ field }) => (
                  <Select {...field} options={ingredientList} />
                )}
              />

              <Controller
                name={`ingredients.${index}.amount`}
                control={control}
                render={({ field }) => (
                  <Select {...field} options={amountList} />
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
