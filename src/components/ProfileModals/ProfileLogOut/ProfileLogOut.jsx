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

const ProfileLogOut = ({ toggleLogOutModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') toggleLogOutModal();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleLogOutModal]);

  const IsWork = () => {
    document.location.reload();
    console.log('LOG OUTED');
  };

  return (
    <Backdrop onClick={ProfileLogOut}>
      <ProfileLogOutContainer>
        <ProfileCancelBtn onClick={toggleLogOutModal}>
          <CloseIcon />
        </ProfileCancelBtn>
        <ProfileLogOutText>Are you sure you want to log out?</ProfileLogOutText>

        <ProfileLogOutButtonsWrapper>
          <ProfileLogOutSubmitBtn
            minHeight="54px"
            minWidth="196px"
            onClick={IsWork}
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
