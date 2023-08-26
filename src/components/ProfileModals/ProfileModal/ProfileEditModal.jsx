import React from 'react';
import {
  ProfileEditBackdrop,
  ProfileEditContainer,
  UserAvatar,
  ProfileEditInput,
  ProfileEditSubmitBtn,
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

const ProfileModal = ({ closeModal }) => {
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
    <ProfileEditBackdrop>
      <ProfileEditContainer>
        <ProfileEditCancelBtn onClick={closeModal}>
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

          <ProfileEditSubmitBtn onClick={IsWork} type="submit">
            Save changes
          </ProfileEditSubmitBtn>
        </ProfileEditForm>

        <TopDecorCircle></TopDecorCircle>
        <BottomDecorCircle></BottomDecorCircle>
      </ProfileEditContainer>
    </ProfileEditBackdrop>
  );
};

export default ProfileModal;
