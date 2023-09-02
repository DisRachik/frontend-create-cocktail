import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  ProfileLogOutContainer,
  ProfileLogOutButtonsWrapper,
  ProfileLogOutText,
  ProfileCancelBtn,
  ProfileLogOutCancelBtn,
  ProfileLogOutSubmitBtn,
  CloseIcon,
} from './LogOutModal.styled';
import { Backdrop } from 'components';
import { useAuth } from 'redux/auth/useAuth';

const modalRoot = document.querySelector('#modal-root');

export const LogOutModal = ({ toggle }) => {
  const { handleSignOut } = useAuth();

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

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      toggle();
    }
  };
  return createPortal(
    <Backdrop onClick={handleCloseOverlay}>
      <ProfileLogOutContainer>
        <ProfileCancelBtn onClick={toggle}>
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
            onClick={toggle}
          >
            Cancel
          </ProfileLogOutCancelBtn>
        </ProfileLogOutButtonsWrapper>
      </ProfileLogOutContainer>
    </Backdrop>,
    modalRoot
  );
};

LogOutModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};
