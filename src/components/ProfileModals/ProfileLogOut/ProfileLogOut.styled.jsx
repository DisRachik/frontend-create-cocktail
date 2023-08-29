import styled from '@emotion/styled';
import { IoMdClose } from 'react-icons/io';
import { theme } from 'styles';

export const ProfileLogOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 500px;
  height: 215px;

  background-color: ${theme.colors.midnightBlue};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;

  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
`;

export const ProfileLogOutButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 12px;
`;

export const ProfileLogOutText = styled.p`
  color: ${theme.colors.lightGray};
  text-align: center;
  font-size: ${theme.fontSizes.large};
  font-style: normal;
  font-weight: 400;
  line-height: calc(24 / 18);
  letter-spacing: -0.36px;
`;

export const ProfileLogOutSubmitBtn = styled.button`
  display: inline-flex;
  padding: 18px 69px;
  justify-content: center;
  align-items: flex-start;

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

export const ProfileLogOutCancelBtn = styled.button`
  display: inline-flex;
  padding: 18px 69px;
  justify-content: center;
  align-items: flex-start;

  border-radius: 42px;
  background: ${theme.colors.steelBlue};
  color: ${theme.colors.lightGray};
  border: 1px solid ${theme.colors.steelBlue};

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
`;

export const ProfileCancelBtn = styled.button`
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
