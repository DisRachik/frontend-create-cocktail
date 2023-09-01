import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ProfileLogOutContainer,
  ProfileLogOutButtonsWrapper,
  ProfileLogOutText,
  ProfileCancelBtn,
  ProfileLogOutCancelBtn,
  ProfileLogOutSubmitBtn,
  CloseIcon,
} from './ProfileLogOut.styled';
import { Backdrop } from 'components';
import { useAuth } from 'redux/auth/useAuth';

const ProfileLogOut = ({ toggleLogOutModal, closeOverlay }) => {
  const { handleSignOut } = useAuth();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') toggleLogOutModal();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleLogOutModal]);

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      closeOverlay();
    }
  };
  return (
    <Backdrop onClick={handleCloseOverlay}>
      <ProfileLogOutContainer>
        <ProfileCancelBtn onClick={toggleLogOutModal}>
          <CloseIcon />
        </ProfileCancelBtn>
        <ProfileLogOutText>Are you sure you want to log out?</ProfileLogOutText>

        <ProfileLogOutButtonsWrapper>
          <ProfileLogOutSubmitBtn
            onClick={() => {
              handleSignOut();
            }}
          >
            Log out
          </ProfileLogOutSubmitBtn>
          <ProfileLogOutCancelBtn
            minHeight="54px"
            minWidth="196px"
            transparent
            onClick={toggleLogOutModal}
          >
            Cancel
          </ProfileLogOutCancelBtn>
        </ProfileLogOutButtonsWrapper>
      </ProfileLogOutContainer>
    </Backdrop>
  );
};

ProfileLogOut.propTypes = {
  toggleLogOutModal: PropTypes.func.isRequired,
};

export default ProfileLogOut;
