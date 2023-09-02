import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  position: fixed;

  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;

  padding-left: 0;
  margin: 0;

  left: 20px;
  right: 20px;
  top: 85px;
  width: 100%vw;
  height: 100vh;
  z-index: 10;

  list-style: none;

  background-color: ${({ theme }) => theme.colors.black};
  /* background-color: red; */

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

  display: flex;
  @media screen and (min-width: 1200px) {
    position: static;

    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100;
    height: 0;
  }
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

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.steelBlue};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    border-color: transparent;
  }
`;
