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
          onChange={handleInputChange}
        />
      </label>

      {errors.instructions && (
        <p style={{ color: 'deeppink' }}>{'Tell us how to make your drink'}</p>
      )}
    </div>
  );
};
