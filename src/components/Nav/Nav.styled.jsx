import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'styles';

export const NavContainer = styled.nav`
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
`;
