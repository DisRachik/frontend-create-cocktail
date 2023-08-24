import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {/* Unauthorized user routes */}
      <NavLink to="/welcome">Welcome</NavLink>

      {/* Authorized user routes */}
      <nav>
        <ul>
          <li>
            <NavLink to="/main">Home</NavLink>
          </li>
          <li>
            <NavLink to="/drinks">Drinks</NavLink>
          </li>
          <li>
            <NavLink to="/add">AddRecipe</NavLink>
          </li>
          <li>
            <NavLink to="/my">MyRecipes</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
