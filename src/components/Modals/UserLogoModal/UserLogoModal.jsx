import { useToggleForInfoModal, useToggleForLogOutModal } from 'helpers';
import {
  DropDawnContainer,
  DropDawnText,
  LogOutBtn,
  DropDawnTextWrapper,
  EditIcon,
} from './UserLogoModal.styled';

import { UserInfoModal, LogOutModal } from 'components';

export const UserLogoModal = () => {
  const { isUserModalOpen, userModalToggle } = useToggleForInfoModal();
  const { isLogOutModalOpen, logOutModalToggle } = useToggleForLogOutModal();

  return (
    <>
      <DropDawnContainer>
        <DropDawnTextWrapper onClick={userModalToggle}>
          <DropDawnText>Edit profile</DropDawnText>
          <EditIcon />
        </DropDawnTextWrapper>
        <LogOutBtn onClick={logOutModalToggle}>Log out</LogOutBtn>

        {isLogOutModalOpen && <LogOutModal toggle={logOutModalToggle} />}
        {isUserModalOpen && <UserInfoModal toggle={userModalToggle} />}
      </DropDawnContainer>
    </>
  );
};
