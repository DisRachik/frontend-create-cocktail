import styled from '@emotion/styled';
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
  margin-bottom: 18px;
`;

const changeOutlineColor = ({ valid, invalid }) => {
  if (valid) {
    return theme.colors.transparentGreen;
  } else if (invalid) {
    return theme.colors.transparentRed;
  }
  return theme.colors.gray;
};

const changeFocusOutlineColor = ({ valid, invalid }) => {
  if (valid) {
    return theme.colors.transparentGreen;
  } else if (invalid) {
    return theme.colors.transparentRed;
  }
  return theme.colors.grayOpacity;
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
    outline: 1px solid ${changeFocusOutlineColor};
  }
`;
