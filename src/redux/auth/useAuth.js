import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuth,
  selectIsRefreshing,
  selectUser,
  selectIsLoading,
  selectTokenCount,
} from './selectors';
import { signOut, refreshUser } from './operations';
import { useNavigate } from 'react-router-dom';
import { resetTokenCount } from './authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const navigation = useNavigate();

  const tokenCount = useSelector(selectTokenCount);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const handleRefreshUser = () => {
    dispatch(refreshUser());
  };

  const resetCount = () => {
    dispatch(resetTokenCount());
  };

  return {
    isAuth,
    user,
    isRefreshing,
    isLoading,
    handleSignOut,
    navigation,
    handleRefreshUser,
    tokenCount,
    resetCount,
  };
};
