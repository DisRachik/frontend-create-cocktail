// Libs
import styled from '@emotion/styled';
// Theme
import { theme } from 'styles';

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 9px 15px;
  font-size: 14px;
  line-height: calc(18 / 14);
  border: 1px solid ${theme.colors.lightGrayTransparent};
  border-radius: 200px;

  user-select: none;
`;

export const CounterButton = styled.button`
  width: 16px;
  height: 16px;
  color: ${theme.colors.lightGrayTransparent};

  &:hover,
  &:focus {
    color: ${theme.colors.lightGray};
  }
`;
