import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const NavigationWrap = styled.div`
  position: fixed;
  z-index: 9998;
  left: 0;
  top: 72px;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  background-color: ${({ theme }) => theme.colors.black};
  transition: ${theme.animation('visibility')};
  transition: ${theme.animation('opacity')};

  @media (min-width: 768px) {
    top: 85px;
  }
`;

export const ScrrolWrrap = styled.div`
  position: fixed;
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px;

  overflow-y: auto;
`;

export const NavList = styled.ul`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

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

export const BurgerRight = styled.div`
  pointer-events: none;
  position: absolute;
  width: 549px;
  height: 543px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  bottom: -51px;
  left: 321px;

  @media (min-width: 768px) {
    bottom: 47px;
    left: 641px;
  }
`;

export const BurgerLeft = styled.div`
  pointer-events: none;
  position: absolute;

  width: 442px;
  height: 430px;
  border-radius: 774px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  bottom: 592px;
  left: -86px;
`;

export const BurgerTopLeft = styled.div`
  pointer-events: none;
  position: absolute;
  width: 300px;
  height: 300px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  bottom: 672px;
  left: -125px;
`;
