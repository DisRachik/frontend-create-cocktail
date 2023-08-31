import React from 'react';
import PropTypes from 'prop-types';

import { useAuth } from 'redux/auth/useAuth';
import { Backdrop } from 'components';
import SubmitModal from 'components/shared/SubmitModal/SubmitModal';

const ProfileLogOut = ({ toggleLogOutModal }) => {
  const { handleSignOut } = useAuth();

  const SignOut = () => {
    console.log('LOG OUTED');
    handleSignOut();
  };

  return (
    <Backdrop>
      <SubmitModal
        toggleModalFunc={toggleLogOutModal}
        text="Are you sure you want to log out?"
        buttonText="Log out"
        submitBtnFunc={SignOut}
      ></SubmitModal>
    </Backdrop>
  );
};

ProfileLogOut.propTypes = {
  toggleLogOutModal: PropTypes.func.isRequired,
};

export default ProfileLogOut;
