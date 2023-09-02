import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const NavigationWrap = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 85px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  transition: ${theme.animation('visibility')};
  transition: ${theme.animation('opacity')};
`;

export const NavList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Li = styled.li`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 40px;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.steelBlue};
  }
`;

export const MenuLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: calc(22.4 / 14);
  text-decoration: none;
  border-radius: 40px;
  border: ${({ theme }) => theme.colors.steelBlue} solid 1px;

  &.active {
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    border-color: transparent;
  }
`;
