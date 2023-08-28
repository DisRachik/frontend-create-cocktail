import logo from 'img/logo.png';
import { UserLink, UserImg, UserText } from './ModalBtnUser.styled';

export const ModalBtnUser = () => {
  // const{user}=isAuth()
  return (
    <>
      <UserLink to="/modal">
        <UserImg src={logo} alt="logo" />
        <UserText>User name</UserText> {/* {user.name} */}
      </UserLink>
    </>
  );
};
