import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from 'components';

export const Layout = () => {
  return (
    <>
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
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
      <main style={{ minHeight: '100%' }}>
        <Suspense
          fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
