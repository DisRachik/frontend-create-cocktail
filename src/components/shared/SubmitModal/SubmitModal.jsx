import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileLogOutContainer,
  ProfileLogOutButtonsWrapper,
  ProfileLogOutText,
  ProfileCancelBtn,
  ProfileLogOutCancelBtn,
  ProfileLogOutSubmitBtn,
  CloseIcon,
} from './SubmitModal.styled';
import { Backdrop } from '../Backdrop/Backdrop';

const SubmitModal = ({ toggleModalFunc, text, buttonText, submitBtnFunc }) => {
  return (
    <Backdrop>
      <ProfileLogOutContainer>
        <ProfileCancelBtn onClick={toggleModalFunc}>
          <CloseIcon />
        </ProfileCancelBtn>
        <ProfileLogOutText>{text}</ProfileLogOutText>

        <ProfileLogOutButtonsWrapper>
          <ProfileLogOutSubmitBtn
            minHeight="54px"
            minWidth="196px"
            onClick={submitBtnFunc}
          >
            {buttonText}
          </ProfileLogOutSubmitBtn>
          <ProfileLogOutCancelBtn
            minHeight="54px"
            minWidth="196px"
            transparent
            onClick={toggleModalFunc}
          >
            Cancel
          </ProfileLogOutCancelBtn>
        </ProfileLogOutButtonsWrapper>
      </ProfileLogOutContainer>
    </Backdrop>
  );
};

SubmitModal.propTypes = {
  closeModalFunc: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  submitBtnFunc: PropTypes.func.isRequired,
};

export default SubmitModal;
