import * as yup from 'yup';
import { emailRegexp, emailMessage, requiredMessage } from './regexp';

export const emailSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .matches(emailRegexp, emailMessage)
      .required(requiredMessage),
  })
  .required();
