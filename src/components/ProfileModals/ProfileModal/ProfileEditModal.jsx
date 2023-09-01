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
} from './ProfileEditModal.styled';
import DEFAULT_AVATAR from '../../../img/default_user_avatar.png';
import { Backdrop } from 'components';

const ProfileModal = ({ toggleProfileEditModal, closeOverlay }) => {
  const IsWork = () => {
    console.log('CHANGES SAVED');
  };

  const AvatarChange = event => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }
  };

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      closeOverlay();
    }
  };
  return (
    <Backdrop onClick={handleCloseOverlay}>
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
