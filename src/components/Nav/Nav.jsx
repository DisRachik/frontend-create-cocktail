import { NavContainer, Link } from './Nav.styled';

export const Nav = () => {
  return (
    <>
      <NavContainer>
        <Link to="/drinks">Drinks</Link>
        <Link to="/add">Add recipes</Link>
        <Link to="/my">My recipes</Link>
        <Link to="/favorite">Favorites</Link>
      </NavContainer>
    </>
  );
};
