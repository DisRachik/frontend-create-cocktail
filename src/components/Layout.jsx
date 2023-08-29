import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';
import { useAuth } from 'redux/auth/useAuth';

export const Layout = () => {
  const { isAuth } = useAuth();
  return (
    <>
      {/* Authorized user routes */}

      {isAuth && <Header />}
      <main style={{ minHeight: '100%' }}>
        <Suspense
          fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}
        >
          <Outlet />
        </Suspense>
      </main>
      {isAuth && <Footer />}
    </>
  );
};
