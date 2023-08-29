import React from 'react';
import {
  ProfileEditContainer,
  UserAvatar,
  ProfileEditInput,
  ProfileEditCancelBtn,
  ProfileEditForm,
  CloseIcon,
  AddPhotoIcon,
  EditIcon,
  TopDecorCircle,
  BottomDecorCircle,
  AvatarWrapper,
} from './ProfileEditModal.styled';
import DEFAULT_AVATAR from '../../../img/default_user_avatar.png';
import { Backdrop, Button } from 'components';

const ProfileModal = ({ toggleProfileEditModal }) => {
  const IsWork = () => {
    console.log('CHANGES SAVED');
  };

  const AvatarChange = event => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }
  };

  return (
    <Backdrop>
      <ProfileEditContainer>
        <ProfileEditCancelBtn onClick={toggleProfileEditModal}>
          <CloseIcon />
        </ProfileEditCancelBtn>
        <label htmlFor="avatarInput">
          <AvatarWrapper>
            <UserAvatar src={DEFAULT_AVATAR} alt="User Avatar" />
            <AddPhotoIcon />
          </AvatarWrapper>
        </label>
        <input
          id="avatarInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={AvatarChange}
        />

        <ProfileEditForm>
          <ProfileEditInput placeholder="Victoria"></ProfileEditInput>
          <EditIcon></EditIcon>

          <Button
            minWidth="400px"
            minHeight="54px"
            onClick={IsWork}
            type="submit"
          >
            Save changes
          </Button>
        </ProfileEditForm>

        <TopDecorCircle></TopDecorCircle>
        <BottomDecorCircle></BottomDecorCircle>
      </ProfileEditContainer>
    </Backdrop>
  );
};

export default ProfileModal;
