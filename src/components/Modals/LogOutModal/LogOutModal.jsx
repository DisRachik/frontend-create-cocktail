import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, CheckoutModal } from 'components';
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
      <CheckoutModal
        cancelClick={toggle}
        contentText="Are you sure you want to log out?"
        agreementBtnText="Log out"
        agreeClick={handleSignOut}
        disagreeClick={toggle}
      />
    </Backdrop>,
    modalRoot
  );
};

LogOutModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};
