import { List, Link } from './Nav.styled';

export const Nav = () => {
  return (
    <>
      <nav>
        <List>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/add">Add recipes</Link>
          </li>
          <li>
            <Link to="/my">My recipes</Link>
          </li>
          <li>
            <Link to="/favorite">Favorites</Link>
          </li>
        </List>
      </nav>
    </>
  );
};
