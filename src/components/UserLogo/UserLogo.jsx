import { UserImg, UserText, UserBtn } from './UserLogo.styled';
import DEFAULT_AVATAR from '../../img/default_user_avatar.png';

import { useAuth } from 'redux/auth/useAuth';
import { useState } from 'react';
import { UserLogoModal } from 'components';

export const UserLogo = () => {
  const [openModal, setOpenModal] = useState(null);
  const { user } = useAuth();

  const openModalWindow = () => {
    setOpenModal(prevState => !prevState);
  };
  // const closeModalWindow = () => {
  //   setOpenModal(null);
  // };
  return (
    <div style={{ position: 'relative' }}>
      <UserBtn onClick={openModalWindow}>
        <UserImg src={DEFAULT_AVATAR} alt="logo" />
        <UserText> {user.name} </UserText>
      </UserBtn>
      {openModal && <UserLogoModal />}
      {/* closeModal={closeModalWindow} */}
    </div>
  );
};
