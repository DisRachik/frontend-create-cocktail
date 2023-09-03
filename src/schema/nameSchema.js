import * as yup from 'yup';

export const nameSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(2, 'The name must consist of at least two characters'),
  })
  .required();
