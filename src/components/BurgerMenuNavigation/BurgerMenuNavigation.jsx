import PropTypes from 'prop-types';
import {
  NavigationWrap,
  Li,
  MenuLink,
  NavList,
} from './BurgerMenuNavigation.styled';
import { useEffect } from 'react';

export const BurgerMenuNavigation = ({ closeMenu }) => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  const handleCloseMenu = () => {
    closeMenu();
  };

  return (
    <NavigationWrap>
      <NavList>
        <Li>
          <MenuLink to="/main" onClick={handleCloseMenu}>
            Home
          </MenuLink>
        </Li>
        <Li>
          <MenuLink to="/drinks" onClick={handleCloseMenu}>
            Drinks
          </MenuLink>
        </Li>
        <Li>
          <MenuLink to="/add" onClick={handleCloseMenu}>
            Add recipe
          </MenuLink>
        </Li>
        <Li>
          <MenuLink to="/my" onClick={handleCloseMenu}>
            My recipe
          </MenuLink>
        </Li>
        <Li>
          <MenuLink to="/favorite" onClick={handleCloseMenu}>
            Favorite
          </MenuLink>
        </Li>
      </NavList>
    </NavigationWrap>
  );
};

BurgerMenuNavigation.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
