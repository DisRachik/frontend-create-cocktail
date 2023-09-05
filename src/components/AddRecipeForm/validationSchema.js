// Libs
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  drink: yup
    .string()
    .required('Enter the title of your drink')
    .min(3, 'Field above must be at least 3 characters long'),
  about: yup
    .string()
    .required('Tell us a few words about your drink')
    .min(10, 'Field above must be at least 10 characters long'),
  drinkThumb: yup
    .mixed()
    .test(file => (file ? true : false))
    .required('Add a photo of yor drink'),
  category: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required('Chose the category of drink'),
  glass: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required(
      'Chose the glass that you think is the best to use with your drink'
    ),
  ingredients: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          title: yup
            .object()
            .shape({
              label: yup.string().required(),
              value: yup.string().required(),
            })
            .required('Chose the ingredient'),
          measure: yup
            .object()
            .shape({
              label: yup.string().required(),
              value: yup.string().required(),
            })
            .required('Chose the quantity'),
        })
        .required()
    )
    .required(),
  instructions: yup
    .string()
    .required('Tell us how to make your drink')
    .min(10, 'Your instructions must be at least 10 characters long'),
});
