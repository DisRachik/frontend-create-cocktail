import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectIsRefreshing, selectUser } from './selectors';

import { signIn, signOut, signUp } from './operations';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  const handleSignIn = user => {
    dispatch(signIn({ ...user }));
  };

  const handleSignUp = user => {
    dispatch(signUp({ ...user }));
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return {
    isAuth,
    user,
    handleSignIn,
    handleSignUp,
    handleSignOut,
    isRefreshing,
  };
};
