import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

// export const PublicRoute = ({ children, redirectTo = '/' }) => {
//   const { isAuth } = useAuth();
//   return !isAuth ? children : <Navigate to={redirectTo} />;
// };

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
