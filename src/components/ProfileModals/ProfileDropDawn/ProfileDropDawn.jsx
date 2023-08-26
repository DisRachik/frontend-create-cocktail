import React, { useState } from 'react';
import {
  DropDawnContainer,
  DropDawnText,
  LogOutBtn,
  DropDawnTextWrapper,
  EditIcon,
} from './ProfileDropDawn.styled';
import ProfileLogOut from '../ProfileLogOut/ProfileLogOut';
import ProfileModal from '../ProfileModal/ProfileEditModal';

const ProfileDropDawn = () => {
  const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false);
  const [isModalProfileEditOpen, setIsModalProfileEditOpen] = useState(false);

  const toggleLogOutModal = () => {
    setIsModalLogOutOpen(prevState => !prevState);
  };

  const toggleProfileEditModal = () => {
    setIsModalProfileEditOpen(prevState => !prevState);
  };

  return (
    <DropDawnContainer>
      <DropDawnTextWrapper onClick={toggleProfileEditModal}>
        <DropDawnText>Edit profile</DropDawnText>
        <EditIcon />
      </DropDawnTextWrapper>
      <LogOutBtn onClick={toggleLogOutModal}>Log out</LogOutBtn>

      {isModalLogOutOpen && <ProfileLogOut closeModal={toggleLogOutModal} />}
      {isModalProfileEditOpen && (
        <ProfileModal closeModal={toggleProfileEditModal} />
      )}
    </DropDawnContainer>
  );
};

export default ProfileDropDawn;
