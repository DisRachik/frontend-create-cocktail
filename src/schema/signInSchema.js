import * as yup from 'yup';
import {
  emailMessage,
  emailRegexp,
  passwordMaxLength,
  passwordMinLength,
  passwordUppercase,
  passwordUppercaseMessage,
  requiredMessage,
} from './regexp';

export const signInSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .matches(emailRegexp, emailMessage)
      .required(requiredMessage),
    password: yup
      .string()
      .required(requiredMessage)
      .min(6, passwordMinLength)
      .max(16, passwordMaxLength)
      .matches(passwordUppercase, passwordUppercaseMessage),
  })
  .required();
