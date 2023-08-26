// Libs
import Select from 'react-select';
import { Controller } from 'react-hook-form';
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
        render={({ field }) => <Select {...field} options={categoriesList} />}
      />
      {errors.category && (
        <p style={{ color: 'deeppink' }}>{'Chose the category of drink'}</p>
      )}

      <InputHeading>Glass</InputHeading>
      <Controller
        name="glass"
        control={control}
        render={({ field }) => <Select {...field} options={glassesList} />}
      />
      {errors.glass && (
        <p style={{ color: 'deeppink' }}>
          {'Chose the glass that you think is the best to use with your drink'}
        </p>
      )}
    </div>
  );
};
