import logo from 'img/logo.png';
import { UserImg, UserText, UserBtn } from './ModalBtnUser.styled';
import { useState } from 'react';
import { useAuth } from 'redux/auth/useAuth';
import ProfileDropDawn from 'components/ProfileModals/ProfileDropDawn/ProfileDropDawn';

export const ModalBtnUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const { user } = useAuth();
  return (
    <>
      <UserBtn onClick={toggleModal}>
        <UserImg src={logo} alt="logo" />
        <UserText> {user.name} </UserText>
      </UserBtn>
      {isModalOpen && <ProfileDropDawn closeModal={toggleModal} />}
    </>
  );
};
