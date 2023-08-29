import React, { useEffect } from 'react';

import {
  ProfileLogOutContainer,
  ProfileLogOutButtonsWrapper,
  ProfileLogOutText,
  ProfileCancelBtn,
  CloseIcon,
} from './ProfileLogOut.styled';
import { Backdrop, Button } from 'components';

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
          <Button minHeight="54px" minWidth="196px" onClick={IsWork}>
            Log out
          </Button>
          <Button
            minHeight="54px"
            minWidth="196px"
            transparent
            onClick={toggleLogOutModal}
          >
            Cancel
          </Button>
        </ProfileLogOutButtonsWrapper>
      </ProfileLogOutContainer>
    </Backdrop>
  );
};

export default ProfileLogOut;
