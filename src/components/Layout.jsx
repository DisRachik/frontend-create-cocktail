import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Spinner, Backdrop, Footer, Header } from 'components';
import { useAuth } from 'redux/auth/useAuth';
import { BackgroundStyles } from './shared/BackgroundStyles/BackgroundStyles';
import { BasicContainer } from './BasicContainer/BasicContainer.styled';

export const Layout = () => {
  const { isAuth } = useAuth();
  return (
    <BasicContainer>
      {/* <div style={{ position: 'relative' }}> */}
      {/* Authorized user routes */}

      {isAuth && <Header />}
      {isAuth && <BackgroundStyles />}
      <main style={{ minHeight: '100%' }}>
        <Suspense
          fallback={
            <Backdrop>
              <Spinner />
            </Backdrop>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      {isAuth && <Footer />}
      <ToastContainer theme="dark" />
    </BasicContainer>
  );
};
