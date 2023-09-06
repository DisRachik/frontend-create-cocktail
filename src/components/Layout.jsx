import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  Spinner,
  Backdrop,
  Footer,
  Header,
  BackgroundStyles,
} from 'components';
import { useAuth } from 'redux/auth/useAuth';
import {
  BasicContainer,
  Main,
} from './shared/BasicContainer/BasicContainer.styled';

export const Layout = () => {
  const { isAuth } = useAuth();

  return (
    <BasicContainer welcome={isAuth ? '1440px' : 'none'}>
      {isAuth && <Header />}
      {isAuth && <BackgroundStyles />}
      <Main>
        <Suspense
          fallback={
            <Backdrop>
              <Spinner />
            </Backdrop>
          }
        >
          <Outlet />
        </Suspense>
      </Main>
      {isAuth && <Footer />}
      <ToastContainer theme="dark" />
    </BasicContainer>
  );
};
