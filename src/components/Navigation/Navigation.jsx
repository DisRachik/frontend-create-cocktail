// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Li, MenuLink, NavList } from './Navigation.styled';

export const Navigation = ({ closeMenu }) => {
  const handleCloseMenu = e => {
    if (e.targer === e.CurrentTarget) {
      closeMenu();
    }
  };
  return (
    <NavList onClick={handleCloseMenu}>
      <Li onClick={handleCloseMenu}>
        <MenuLink to="/main">Home</MenuLink>
      </Li>
      <Li onClick={handleCloseMenu}>
        <MenuLink to="/drinks">Drinks</MenuLink>
      </Li>
      <Li onClick={handleCloseMenu}>
        <MenuLink to="/add">Add recipe</MenuLink>
      </Li>
      <Li onClick={handleCloseMenu}>
        <MenuLink to="/my">My recipe</MenuLink>
      </Li>
      <Li onClick={handleCloseMenu}>
        <MenuLink to="/favorite">Favorite</MenuLink>
      </Li>
    </NavList>
  );
};
Navigation.propTypes = {
  nav: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
