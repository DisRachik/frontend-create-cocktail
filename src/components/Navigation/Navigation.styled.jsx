import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  position: fixed;

  display: none;

  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;

  left: 20px;
  right: 20px;
  top: 85px;
  /* bottom: 0; */
  width: 100;
  height: 100;
  z-index: 10;

  /* transition: bottom 1s; */

  list-style: none;
  padding-left: 0;
  margin: 0;

  bottom: ${props => {
    return props.nav || props.close ? '0' : '100%';
  }};
  display: ${props => {
    return props.nav || props.close ? 'flex' : 'none';
  }};

  @media screen and (min-width: 1200px) {
    position: static;

    display: flex;
    flex-direction: row;

    gap: 16px;
  }
`;

export const Li = styled.li``;

export const MenuLink = styled(Link)`
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
`;
