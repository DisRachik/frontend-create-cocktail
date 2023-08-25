import styled from '@emotion/styled';
import { BiErrorCircle } from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 309px;
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  line-height: calc(20 / 14);
  color: ${({ theme }) => theme.colors.lightGray};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: calc(24 / 18);
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: inherit;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: calc(27 / 17);
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.grayOpacity};
    outline-offset: -1px;
  }
`;

export const ErrorIcon = styled(BiErrorCircle)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

export const CheckIcon = ErrorIcon.withComponent(IoIosCheckmarkCircleOutline);

export const ErrorMessage = styled.p`
  margin-top: 8px;
  padding-left: 20px;
  font-size: ${({ theme }) => theme.fontSizes.ultraSmall};
  font-weight: 400;
  line-height: calc(14 / 12);
`;

export const Button = styled.button`
  padding: 18px 0;
  margin-top: 18px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 200px;
  cursor: pointer;
  transition: ${({ theme }) => theme.animation('background-color')};

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: calc(27 / 17);
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.midnightBlue};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:disabled {
    cursor: initial;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
