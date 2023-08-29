import categories from '../../data/categories.json';
import ingridients from '../../data/ingridientsDb.json';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Selector } from './DrinksSearchBar.styled';

export const DrinkSearchBar = ({ name, onChange }) => {
  const { control, handleSubmit, watch, getValues } = useForm({
    defaultValues: {
      search: '',
      categories: null,
      ingridients: null,
    },
  });

  const onSubmit = async () => {
    const formData = getValues();
    const searchData = watch('search');
    const selectedCategory = watch('category');
    const selectedIngridient = watch('ingridient');
    // const { searchData, selectedCategory, selectedIngridient } = formData;
    console.log(searchData);
    console.log(selectedCategory.value);
    console.log(selectedIngridient.value);
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <Input {...field} onChange={onChange} value={name} />
        )}
      />
      <Controller
        name="categories"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="All Categories"
            {...field}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: '#161F37',
                color: '#F3F3F3',
                borderRadius: '20px',
                width: '335px',
              }),
              menuList: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: '#161F37',
                color: '#F3F3F3',
                borderRadius: '20px',
                width: '335px',
              }),
            }}
            options={categories.map(option => ({
              value: option.title,
              label: option.title,
            }))}
          />
        )}
      />
      <Controller
        name="ingridients"
        control={control}
        render={({ field }) => (
          <Selector
            placeholder="Ingridients"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: '#161F37',
                color: '#F3F3F3',
                borderRadius: '20px',
                width: '335px',
              }),
              menuList: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: '#161F37',
                color: 'rgba(243, 243, 243, 0.4)',
                borderRadius: '20px',
                width: '335px',
              }),
            }}
            {...field}
            options={ingridients.map(option => ({
              value: option.title,
              label: option.title,
            }))}
          />
        )}
      />
    </Form>
  );
};
