import PropTypes from 'prop-types';

export const RecipePreparationFields = ({
  register,
  errors,
  state,
  handleInputChange,
}) => {
  return (
    <div>
      <h2>Recipe Preparation</h2>

      <label>
        <textarea
          rows="5"
          cols="20"
          name="instructions"
          {...register('instructions')}
          value={state.instructions.join('\n')}
          onChange={({ target: { name, value } }) =>
            handleInputChange(name, value)
          }
        />
      </label>

      {errors.instructions && (
        <p style={{ color: 'deeppink' }}>{'Tell us how to make your drink'}</p>
      )}
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
    instructions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
