import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';
// import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      {/* Authorized user routes */}
      <Header />
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
