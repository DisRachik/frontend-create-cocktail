// Libs
import { Controller, useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';
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
  RemoveBtn,
  selectStyles,
  measureSelectStyles,
} from './RecipeIngredientsFields.styled';
import { ErrorValidationText } from '../ErrorValidationText/ErrorValidationText.styled';
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
    if (fields.length === MIN_FIELDS_COUNT) {
      return toast.error('Your recipe must include at least 2 ingredients');
    }

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

              {errors.ingredients && errors.ingredients[index] && (
                <ErrorValidationText>
                  {errors.ingredients[index].title?.message}
                </ErrorValidationText>
              )}

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

              {errors.ingredients && errors.ingredients[index] && (
                <ErrorValidationText>
                  {errors.ingredients[index].measure?.message}
                </ErrorValidationText>
              )}

              <RemoveBtn type="button" onClick={() => handleRemoveField(index)}>
                <IoMdClose size={18} />
              </RemoveBtn>
            </SelectListItem>
          );
        })}
      </SelectList>
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
    instructions: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.arrayOf(PropTypes.string.isRequired),
    ]).isRequired,
  }).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};
