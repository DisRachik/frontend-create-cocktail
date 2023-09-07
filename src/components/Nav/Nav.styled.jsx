import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'styles';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: calc(22.4 / 14);
  color: ${theme.colors.lightGray};

  padding: 7px 12px;
  border-radius: 30px;
  border-width: 1px solid rgba(0, 0, 0, 0);
  transition: background-color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    border-color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    padding 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  @media (min-width: 1200px) {
    padding: 10px 12px;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    box-shadow: 0px 4px 10px 4px ${theme.colors.gray};
  }
`;
