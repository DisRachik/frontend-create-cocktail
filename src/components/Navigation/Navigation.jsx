// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Li, MenuLink, NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavList>
      <Li>
        <MenuLink to="/main">Home</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/drinks">Drinks</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/add">Add recipe</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/my">My recipe</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/favorite">Favorite</MenuLink>
      </Li>
    </NavList>
  );
};
