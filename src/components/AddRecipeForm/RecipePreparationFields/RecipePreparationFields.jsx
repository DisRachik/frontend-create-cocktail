export const RecipePreparationFields = ({ register, errors }) => {
  return (
    <div>
      <h2>Recipe Preparation</h2>

      <label>
        <textarea
          rows="5"
          cols="20"
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
