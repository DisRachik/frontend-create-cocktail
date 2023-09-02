import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { EmptyAndError, Footer, Header } from 'components';
import { useAuth } from 'redux/auth/useAuth';

export const Layout = () => {
  const { isAuth } = useAuth();
  return (
    <div>
      {/* <div style={{ position: 'relative' }}> */}
      {/* Authorized user routes */}

      {isAuth && <Header />}
      <main style={{ minHeight: '100%' }}>
        <Suspense fallback={<EmptyAndError spinner />}>
          <Outlet />
        </Suspense>
      </main>
      {isAuth && <Footer />}
      <ToastContainer theme="dark" />
    </div>
  );
};
