// Libs
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
// Styled components
import { Label, InputHeading } from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({
  register,
  control,
  errors,
  glassesList,
  categoriesList,
  state,
  handleInputChange,
  handleSingleSelectChange,
}) => {
  return (
    <div>
      <Label>
        <input
          type="file"
          name="drinkThumb"
          accept="image/*, .png, .jpg, .gif, .web"
          {...register('drinkThumb')}
        />
      </Label>
      {errors.drinkThumb?.message && (
        <p style={{ color: 'deeppink' }}>{'Add a photo of yor drink'}</p>
      )}

      <Label>
        <InputHeading>Enter item title</InputHeading>
        <input
          type="text"
          name="drink"
          {...register('drink')}
          value={state.drink}
          onChange={({ target: { name, value } }) =>
            handleInputChange(name, value)
          }
        />
      </Label>
      {errors.drink && (
        <p style={{ color: 'deeppink' }}>{'Enter the title of your drink'}</p>
      )}

      <Label>
        <InputHeading>Enter about recipe</InputHeading>
        <input
          type="text"
          name="about"
          {...register('about')}
          value={state.about}
          onChange={({ target: { name, value } }) =>
            handleInputChange(name, value)
          }
        />
      </Label>
      {errors.about && (
        <p style={{ color: 'deeppink' }}>
          {'Tell us a few words about your drink'}
        </p>
      )}

      <InputHeading>Category</InputHeading>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Select from options..."
            options={categoriesList}
            defaultValue={state.category}
            onChange={selectedOption => {
              field.onChange(selectedOption);
              handleSingleSelectChange(field.name, selectedOption);
            }}
          />
        )}
      />
      {errors.category && (
        <p style={{ color: 'deeppink' }}>{'Chose the category of drink'}</p>
      )}

      <InputHeading>Glass</InputHeading>
      <Controller
        name="glass"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Select from options..."
            options={glassesList}
            defaultValue={state.glass}
            onChange={selectedOption => {
              field.onChange(selectedOption);
              handleSingleSelectChange(field.name, selectedOption);
            }}
          />
        )}
      />
      {errors.glass && (
        <p style={{ color: 'deeppink' }}>
          {'Chose the glass that you think is the best to use with your drink'}
        </p>
      )}
    </div>
  );
};

RecipeDescriptionFields.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  glassesList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  categoriesList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
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
  handleSingleSelectChange: PropTypes.func.isRequired,
};
