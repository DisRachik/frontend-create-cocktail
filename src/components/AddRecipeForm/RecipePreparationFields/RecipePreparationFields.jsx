export const RecipePreparationFields = ({ register, errors }) => {
  return (
    <div>
      <h2>Recipe Preparation</h2>

      <label>
        <input
          type="textarea"
          name="instructions"
          {...register('instructions')}
        />
      </label>

      {errors.instructions && (
        <p style={{ color: 'deeppink' }}>{'Tell us how to make your drink'}</p>
      )}
    </div>
  );
};
