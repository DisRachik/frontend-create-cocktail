import { UserImg, UserText, UserBtn } from './UserLogo.styled';
import DEFAULT_AVATAR from '../../img/default_user_avatar.png';
import { useAuth } from 'redux/auth/useAuth';
import { useState } from 'react';
import { UserLogoModal } from 'components';

import { useToggleForInfoModal, useToggleForLogOutModal } from 'helpers';
import { UserInfoModal, LogOutModal } from 'components';

export const UserLogo = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isUserModalOpen, userModalToggle } = useToggleForInfoModal();
  const { isLogOutModalOpen, logOutModalToggle } = useToggleForLogOutModal();

  const { user } = useAuth();

  const openModalWindow = () => {
    setOpenModal(prevState => !prevState);
  };

  const isModalOpen = () => {
    if (isUserModalOpen || isLogOutModalOpen) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style.overflow = 'auto');
  };

  isModalOpen();

  const handleOpenUserModal = () => {
    userModalToggle();
    setOpenModal(false);
  };

  const handleOpenLogoutModal = () => {
    logOutModalToggle();
    setOpenModal(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <UserBtn onClick={openModalWindow}>
        <UserImg
          src={user.avatarURL ? user.avatarURL : DEFAULT_AVATAR}
          alt="logo"
        />
        <UserText> {user.name} </UserText>
      </UserBtn>
      {openModal && (
        <UserLogoModal
          logOutModalToggle={handleOpenLogoutModal}
          userModalToggle={handleOpenUserModal}
        />
      )}
      {isLogOutModalOpen && <LogOutModal toggle={logOutModalToggle} />}
      {isUserModalOpen && <UserInfoModal toggle={userModalToggle} />}
    </div>
  );
};
