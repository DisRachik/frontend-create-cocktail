import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  DropDawnContainer,
  DropDawnText,
  LogOutBtn,
  DropDawnTextWrapper,
  EditIcon,
} from './ProfileDropDawn.styled';
import ProfileLogOut from '../ProfileLogOut/ProfileLogOut';
import ProfileModal from '../ProfileModal/ProfileEditModal';

const ProfileDropDawn = ({ closeModal }) => {
  const ROOT = document.querySelector('#root');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleKeyDown);
    ROOT.addEventListener('click', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      ROOT.removeEventListener('click', handleCloseModal);
    };
  }, [closeModal]);

  const handleCloseModal = event => {
    if (event.target !== event.currentTarget) closeModal();
  };

  const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false);
  const [isModalProfileEditOpen, setIsModalProfileEditOpen] = useState(false);

  const toggleLogOutModal = () => {
    setIsModalLogOutOpen(prevState => !prevState);
  };

  const toggleProfileEditModal = () => {
    setIsModalProfileEditOpen(prevState => !prevState);
  };

  return ReactDOM.createPortal(
    <DropDawnContainer>
      <DropDawnTextWrapper onClick={toggleProfileEditModal}>
        <DropDawnText>Edit profile</DropDawnText>
        <EditIcon />
      </DropDawnTextWrapper>
      <LogOutBtn onClick={toggleLogOutModal}>Log out</LogOutBtn>

      {isModalLogOutOpen && (
        <ProfileLogOut toggleLogOutModal={toggleLogOutModal} />
      )}
      {isModalProfileEditOpen && (
        <ProfileModal toggleProfileEditModal={toggleProfileEditModal} />
      )}
    </DropDawnContainer>,
    document.body
  );
};

ProfileDropDawn.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ProfileDropDawn;
