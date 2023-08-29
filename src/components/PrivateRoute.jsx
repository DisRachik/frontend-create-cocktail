import { useAuth } from 'redux/auth/useAuth';

import { Navigate } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';

// import { useAuth } from 'components';

// export const PrivateRoute = ({ children, redirectTo = '/welcome' }) => {
//   const { isAuth } = useAuth();
//   const location = useLocation();
//   return isAuth ? children : <Navigate to={redirectTo} state={location} />;
// };
export const PrivateRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  //   const { isLoggedIn, isRefreshing } = useAuth();
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  const { isAuth, isRefreshing } = useAuth();
  const shouldRedirect = !isAuth && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
