import styled from '@emotion/styled';
import { BiErrorCircle } from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { theme } from 'styles';

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 309px;
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: ${theme.fontSizes.small};
  font-weight: 400;
  line-height: calc(20 / 14);
  color: ${theme.colors.lightGray};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    line-height: calc(24 / 18);
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

const changeOutlineColor = ({ valid, invalid }) => {
  if (valid) {
    return theme.colors.transparentGreen;
  } else if (invalid) {
    return theme.colors.transparentRed;
  }
  return theme.colors.gray;
};

export const Input = styled.input`
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid ${theme.colors.gray};
  width: 100%;
  font-size: ${theme.fontSizes.small};
  font-weight: 400;
  line-height: calc(18 / 14);
  color: ${theme.colors.lightGray};
  background-color: inherit;
  outline: 1px solid ${changeOutlineColor};
  outline-offset: -1px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.inputText};
    line-height: calc(27 / 17);
  }

  &:focus {
    outline: 1px solid ${changeOutlineColor};
  }
`;

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

export const ErrorMessage = styled.p`
  margin-top: 8px;
  padding-left: 20px;
  font-size: ${theme.fontSizes.ultraSmall};
  font-weight: 400;
  line-height: calc(14 / 12);
  color: ${props => console.log(props)};
`;

export const Button = styled.button`
  padding: 18px 0;
  margin-top: 18px;
  width: 100%;
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  line-height: calc(18 / 14);
  color: ${theme.colors.lightGray};
  background-color: inherit;
  border: 1px solid ${theme.colors.gray};
  border-radius: 200px;
  cursor: pointer;
  transition: ${theme.animation('background-color')};

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: calc(27 / 17);
  }

  &:hover,
  &:focus {
    color: ${theme.colors.midnightBlue};
    background-color: ${theme.colors.lightGray};
  }

  &:disabled {
    cursor: initial;
    background-color: inherit;
    color: ${theme.colors.gray};
  }
`;
