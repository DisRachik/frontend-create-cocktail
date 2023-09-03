import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { nameSchema } from 'schema';
import { useAuth } from 'redux/auth/useAuth';
import { updateUser } from 'redux/auth/operations';
import { generateFormData } from 'helpers';
import { Button, FormMessages, CancelBtn, Backdrop } from 'components';
import {
  ProfileEditContainer,
  UserAvatar,
  ProfileEditInput,
  ProfileEditForm,
  AddPhotoIcon,
  EditIcon,
  TopDecorCircle,
  BottomDecorCircle,
  FileInputBox,
  FileInput,
  IconBox,
  InputNameBox,
  BtnBox,
} from './UserInfoModal.styled';
import DEFAULT_AVATAR from '../../../img/default_user_avatar.png';

const modalRoot = document.querySelector('#modal-root');

export const UserInfoModal = ({ toggle, isOpen }) => {
  const { user } = useAuth();
  const [avatarURL, setAvatarURL] = useState(null);
  const [userName, setUserName] = useState(user.name);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(nameSchema),
  });

  useEffect(() => {
    const handleCloseEsc = evt => {
      if (evt.code === 'Escape') {
        toggle();
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [toggle]);

  const handelBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggle();
    }
  };

  const imageURL = avatarURL ? URL.createObjectURL(avatarURL) : null;

  const avatarChange = evt => {
    const value = evt.target.files[0];

    setAvatarURL(value);
  };

  const onSubmit = async data => {
    const name = data.name;

    const reqBody = { name, avatarURL };

    const formData = generateFormData(reqBody);

    try {
      await dispatch(updateUser(formData));

      toggle();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const previewAvatar = (() => {
    if (imageURL) {
      return imageURL;
    } else if (user.avatarURL) {
      return user.avatarURL;
    }
    return DEFAULT_AVATAR;
  })();

  const isDisabled = (() => {
    if (user.name === userName && !avatarURL) {
      return true;
    } else if (userName === '') {
      return true;
    }

    return false;
  })();

  return createPortal(
    <Backdrop onClick={handelBackdropClick}>
      <ProfileEditContainer>
        <CancelBtn cancelClick={toggle} />

        <ProfileEditForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FileInputBox>
            <UserAvatar src={previewAvatar} alt="User Avatar" />
            <IconBox>
              <AddPhotoIcon />
              <FileInput
                name="avatarURL"
                type="file"
                accept="image/*, .png, .jpg, .gif, .web"
                {...register('avatarURL')}
                onChange={avatarChange}
              />
            </IconBox>
          </FileInputBox>

          <InputNameBox>
            <ProfileEditInput
              type="name"
              name="name"
              {...register('name')}
              value={userName}
              onChange={e => setUserName(e.target.value)}
              valid={isValid && isDirty}
              invalid={!isValid}
            />

            <EditIcon />
          </InputNameBox>
          <FormMessages
            invalidValue={dirtyFields.name && errors.name}
            validValue={!errors.name && dirtyFields.name}
            errorMessage={errors.name?.message}
            checkMessage="This is valid name"
          />
          <BtnBox>
            <Button minWidth="100%" minHeight="54px" disabled={isDisabled}>
              Save changes
            </Button>
          </BtnBox>
        </ProfileEditForm>

        <TopDecorCircle></TopDecorCircle>
        <BottomDecorCircle></BottomDecorCircle>
      </ProfileEditContainer>
    </Backdrop>,
    modalRoot
  );
};

UserInfoModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};
