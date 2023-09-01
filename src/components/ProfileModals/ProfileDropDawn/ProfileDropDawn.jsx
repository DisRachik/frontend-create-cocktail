import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import {
  DropDawnContainer,
  DropDawnText,
  LogOutBtn,
  DropDawnTextWrapper,
  EditIcon,
} from './ProfileDropDawn.styled';

import ProfileLogOut from '../ProfileLogOut/ProfileLogOut';
import ProfileModal from '../ProfileModal/ProfileEditModal';

export const ProfileDropDawn = ({ closeModal }) => {
  const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false);
  const [isModalProfileEditOpen, setIsModalProfileEditOpen] = useState(false);
  // const ROOT = document.querySelector('#modal-root');

  useEffect(() => {
    const handleCloseModal = event => {
      if (event.target === event.currentTarget) closeModal();
    };

    const handleKeyDown = event => {
      if (event.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleKeyDown);
    // ROOT.addEventListener('click', handleCloseModal);
    document.addEventListener('click', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // ROOT.removeEventListener('click', handleCloseModal);
      document.removeEventListener('click', handleCloseModal);
    };
  }, [closeModal]);

  // const handleKeyDown = event => {
  //   if (event.key === 'Escape') closeModal();
  // };

  const handleCloseModal = event => {
    if (event.target === event.currentTarget) closeModal();
  };

  const toggleLogOutModal = () => {
    setIsModalLogOutOpen(prevState => !prevState);
  };

  const toggleProfileEditModal = () => {
    setIsModalProfileEditOpen(prevState => !prevState);
  };

  const closeOverlayLogout = () => {
    setIsModalLogOutOpen(false);
  };

  const closeOverlayProfile = () => {
    setIsModalProfileEditOpen(false);
  };

  // return ReactDOM.createPortal(
  return (
    <>
      <DropDawnContainer onClick={handleCloseModal}>
        <DropDawnTextWrapper onClick={toggleProfileEditModal}>
          <DropDawnText>Edit profile</DropDawnText>
          <EditIcon />
        </DropDawnTextWrapper>
        <LogOutBtn onClick={toggleLogOutModal}>Log out</LogOutBtn>

        {isModalLogOutOpen && (
          <ProfileLogOut
            toggleLogOutModal={toggleLogOutModal}
            closeOverlay={closeOverlayLogout}
          />
        )}
        {isModalProfileEditOpen && (
          <ProfileModal
            toggleProfileEditModal={toggleProfileEditModal}
            closeOverlay={closeOverlayProfile}
          />
        )}
      </DropDawnContainer>
    </>
    // document.body
  );
};

ProfileDropDawn.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
