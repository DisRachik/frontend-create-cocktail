import styled from '@emotion/styled';
import { theme } from 'styles';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

export const ProfileEditContainer = styled.div`
  width: 335px;
  height: 345px;

  background-color: ${theme.colors.midnightBlue};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 25px;

  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 426px;

    padding: 50px 50px 75px;
  }
`;

export const FileInputBox = styled.div`
  margin-bottom: 25px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 94px;

  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
    width: 100px;
    height: 100px;
  }
`;

export const ProfileEditForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserAvatar = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  transition: filter linear 200ms, scale linear 200ms;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const IconBox = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #546081;
  left: 50%;
  transform: translate(-50%, 0%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${theme.colors.lightBlue};
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    bottom: -15px;
  }
`;

export const AddPhotoIcon = styled(AiOutlinePlus)`
  position: absolute;
  color: ${theme.colors.lightGray};
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const InputNameBox = styled.div`
  position: relative;
  width: 100%;
`;

const changeOutlineColor = ({ valid, invalid }) => {
  if (valid) {
    return theme.colors.transparentGreen;
  } else if (invalid) {
    return theme.colors.transparentRed;
  }
  return theme.colors.gray;
};

const changeFocusOutlineColor = ({ valid, invalid }) => {
  if (valid) {
    return theme.colors.transparentGreen;
  } else if (invalid) {
    return theme.colors.transparentRed;
  }
  return theme.colors.grayOpacity;
};

export const ProfileEditInput = styled.input`
  width: 100%;
  height: 54px;

  padding: 14px 54px 14px 24px;

  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  opacity: 0.8;

  background-color: transparent;
  color: ${theme.colors.lightGray};
  outline: 1px solid ${changeOutlineColor};
  outline-offset: -1px;

  &:focus {
    outline: 1px solid ${changeFocusOutlineColor};
  }
`;

export const EditIcon = styled(FiEdit2)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;

    position: absolute;
    bottom: 150px;
  }
`;

export const BtnBox = styled.div`
  margin-top: 18px;
  height: 54px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 25px;
  }
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
