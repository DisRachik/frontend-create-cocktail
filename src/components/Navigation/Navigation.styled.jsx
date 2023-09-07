import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;

  list-style: none;

  background-color: ${({ theme }) => theme.colors.black};

  background-image: radial-gradient(
      circle at 700px 0px,
      ${({ theme }) => theme.colors.lightBlue} 0%,
      ${({ theme }) => theme.colors.black} 220px
    ),
    radial-gradient(
      circle at center,
      ${({ theme }) => theme.colors.mintGreen} 0%,
      ${({ theme }) => theme.colors.black} 50px
    );
`;

export const Li = styled.li``;

export const MenuLink = styled(NavLink)`
  padding: 8px 16px;
  border: ${({ theme }) => theme.colors.steelBlue} solid 1px;
  border-radius: 40px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: calc(22.4 / 14);
  text-decoration: none;

  color: ${({ theme }) => theme.colors.lightGray};

  transition: ${props =>
    props.theme.animation('background-color, border-color')};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.steelBlue};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    border-color: transparent;
  }
`;
