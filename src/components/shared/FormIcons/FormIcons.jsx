import { CheckIcon, ErrorIcon } from './FormIcons.styled';

export const FormIcons = ({ valid, invalid }) => {
  if (valid) {
    return <CheckIcon />;
  } else if (invalid) {
    return <ErrorIcon />;
  }
};
