import styled from '@emotion/styled';
import { theme } from 'styles';
import { IoMdClose } from 'react-icons/io';

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
  width: 24px;
  height: 24px;
  color: ${theme.colors.lightGray};

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
