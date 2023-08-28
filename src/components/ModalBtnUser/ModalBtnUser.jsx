import logo from 'img/logo.png';
import { UserImg, UserText, UserBtn } from './ModalBtnUser.styled';

import { useAuth } from 'redux/auth/useAuth';

export const ModalBtnUser = () => {
  const { user, handleSignOut } = useAuth();
  return (
    <>
      <UserBtn
        onClick={() => {
          handleSignOut();
        }}
      >
        <UserImg src={logo} alt="logo" />
        <UserText> {user.name} </UserText>
      </UserBtn>
    </>
  );
};
