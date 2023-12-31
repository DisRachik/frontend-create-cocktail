// Libs
import PropTypes from 'prop-types';
// Styled components
import {
  RecipeTitle,
  TextareaBox,
  Textarea,
} from './RecipePreparationFields.styled';
import { ErrorValidationText } from '../ErrorValidationText/ErrorValidationText.styled';

export const RecipePreparationFields = ({
  register,
  errors,
  state,
  handleInputChange,
}) => {
  return (
    <div>
      <RecipeTitle>Recipe Preparation</RecipeTitle>

      <TextareaBox>
        <Textarea
          placeholder="Enter the recipe"
          name="instructions"
          autocomplete="off"
          {...register('instructions')}
          value={
            state.instructions === ''
              ? state.instructions
              : state.instructions.join('\n')
          }
          onChange={handleInputChange}
        />

        {errors.instructions && (
          <ErrorValidationText>
            {errors.instructions.message}
          </ErrorValidationText>
        )}
      </TextareaBox>
    </div>
  );
};

RecipePreparationFields.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
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
  handleInputChange: PropTypes.func.isRequired,
};
