import React from 'react';
import PropTypes from 'prop-types';
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
  ProfileEditSubmitBtn,
  // AvatarLabel
} from './ProfileEditModal.styled';
import DEFAULT_AVATAR from '../../../img/default_user_avatar.png';
import { useAuth } from 'redux/auth/useAuth';
import { Backdrop } from 'components';

const ProfileModal = ({ toggleProfileEditModal }) => {
  const { user } = useAuth();

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

        <ProfileEditForm>
          <label htmlFor="avatarInput">
            <AvatarWrapper>
              <UserAvatar
                className="avatar"
                src={DEFAULT_AVATAR}
                alt="User Avatar"
              />
              <AddPhotoIcon className="avatarIcon" />
            </AvatarWrapper>
          </label>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={AvatarChange}
          />

          <ProfileEditInput placeholder={user.name}></ProfileEditInput>
          <EditIcon></EditIcon>

          <ProfileEditSubmitBtn
            minWidth="400px"
            minHeight="54px"
            onClick={IsWork}
            type="submit"
          >
            Save changes
          </ProfileEditSubmitBtn>
        </ProfileEditForm>

        <TopDecorCircle></TopDecorCircle>
        <BottomDecorCircle></BottomDecorCircle>
      </ProfileEditContainer>
    </Backdrop>
  );
};

ProfileModal.propTypes = {
  toggleProfileEditModal: PropTypes.func.isRequired,
};

export default ProfileModal;
