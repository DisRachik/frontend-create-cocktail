import styled from '@emotion/styled';
import { theme } from 'styles';
import { IoMdClose } from 'react-icons/io';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

export const ProfileEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 500px;
  height: 426px;

  background-color: ${theme.colors.midnightBlue};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;

  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

  overflow: hidden;
`;

export const AvatarWrapper = styled.div`
  cursor: pointer;
`;

export const UserAvatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
`;

export const ProfileEditForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;
`;

export const ProfileEditInput = styled.input`
  width: 100%;
  height: 54px;

  padding: 14px 54px 14px 24px;

  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  opacity: 0.8;

  background-color: transparent;
  color: ${theme.colors.lightGray};

  ::placeholder {
    color: ${theme.colors.lightGray};
  }
`;

export const ProfileEditSubmitBtn = styled.button`
  display: inline-flex;
  padding: 18px 147px;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 56px;

  border-radius: 42px;
  background: ${theme.colors.lightGray};
  color: ${theme.colors.midnightBlue};
  border: 1px solid ${theme.colors.lightGray};

  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);
  white-space: nowrap;

  transition: ${theme.animation('background-color')};

  &:hover,
  &:focus {
    color: ${theme.colors.lightGray};
    background: ${theme.colors.midnightBlue};
    border: 1px solid rgba(243, 243, 243, 0.2);
  }

  &:disabled {
    cursor: initial;
    color: rgba(243, 243, 243, 0.2);
    background: ${theme.colors.midnightBlue};
    border: 1px solid rgba(243, 243, 243, 0.2);
  }
`;

export const ProfileEditCancelBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  padding: 2px;

  width: 32px;
  height: 32px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition: ${theme.animation('border')};

  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.lightGray};
  }
`;

export const CloseIcon = styled(IoMdClose)`
  width: 32px;
  height: 32px;
  color: ${theme.colors.lightGray};
`;

export const AddPhotoIcon = styled(AiFillPlusCircle)`
  width: 32px;
  height: 32px;
  position: absolute;

  z-index: 99;
  top: 134px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const EditIcon = styled(FiEdit2)`
  width: 20px;
  height: 20px;

  position: absolute;
  bottom: 150px;
  right: 74px;
`;

export const TopDecorCircle = styled.div`
  width: 284px;
  height: 307px;

  position: absolute;
  top: -150px;
  left: -150px;

  border-radius: 306.702px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);
`;

export const BottomDecorCircle = styled.div`
  width: 362px;
  height: 358px;

  position: absolute;
  bottom: -200px;
  right: -200px;

  border-radius: 362px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`;
