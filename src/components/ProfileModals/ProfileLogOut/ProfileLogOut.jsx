import React from 'react';
import {
  ProfileLogOutContainer,
  ProfileLogOutButtonsWrapper,
  ProfileLogOutText,
  ProfileLpgOutBackdrop,
  ProfileLogOutSubmitBtn,
  ProfileLogOutCancelBtn,
} from './ProfileLogOut.styled';

const ProfileLogOut = ({ closeModal }) => {
  const IsWork = () => {
    console.log('LOG OUTED');
  };

  return (
    <ProfileLpgOutBackdrop>
      <ProfileLogOutContainer>
        <ProfileLogOutText>Are you sure you want to log out?</ProfileLogOutText>

        <ProfileLogOutButtonsWrapper>
          <ProfileLogOutSubmitBtn onClick={IsWork}>
            Log out
          </ProfileLogOutSubmitBtn>
          <ProfileLogOutCancelBtn onClick={closeModal}>
            Cancel
          </ProfileLogOutCancelBtn>
        </ProfileLogOutButtonsWrapper>
      </ProfileLogOutContainer>
    </ProfileLpgOutBackdrop>
  );
};

export default ProfileLogOut;
