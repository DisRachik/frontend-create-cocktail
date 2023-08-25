import * as yup from 'yup';

export const emailSchema = yup
  .object()
  .shape({
    email: yup.string().email().required('This field is required'),
  })
  .required();
