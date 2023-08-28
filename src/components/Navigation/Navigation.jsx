// import { useState } from 'react';
import { Li, MenuLink, NavList } from './Navigation.styled';

export const Navigation = ({ nav }) => {
  //   const [close, setClose] = useState(false);
  return (
    <NavList nav={nav}>
      <Li>
        <MenuLink
          to="/"
          //   onClick={() => {
          //     setClose(!close);
          //   }}
        >
          Home
        </MenuLink>
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
