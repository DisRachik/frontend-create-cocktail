import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from 'components';
import { useState } from 'react';
import ProfileDropDawn from './ProfileModals/ProfileDropDawn/ProfileDropDawn';

export const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

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
            <button onClick={toggleModal}>PROFILE</button>
          </li>
        </ul>
      </nav>
      {isModalOpen && <ProfileDropDawn closeModal={toggleModal} />}
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
