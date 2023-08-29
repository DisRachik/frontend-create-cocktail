// Libs
import styled from '@emotion/styled';
// Icons
import { BiErrorCircle } from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
// Theme
import { theme } from 'styles';

export const ErrorIcon = styled(BiErrorCircle)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  color: ${theme.colors.errorRed};
`;

export const CheckIcon = styled(IoIosCheckmarkCircleOutline)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  color: ${theme.colors.successGreen};
`;
