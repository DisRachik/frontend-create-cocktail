import styled from '@emotion/styled';
import { theme } from 'styles';
import { FiEdit2 } from 'react-icons/fi';

export const DropDawnContainer = styled.div`
  width: 177px;
  height: 134px;
  flex-shrink: 0;

  border-radius: 8px;
  background: ${theme.colors.midnightBlue};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 18px;

  position: absolute;
  top: 150%;
  left: -25%;
`;

export const DropDawnTextWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${theme.colors.lightGray};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.grayOpacity};
  }
`;

export const DropDawnText = styled.p`
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const LogOutBtn = styled.button`
  display: inline-flex;
  padding: 12px 45px;
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

export const EditIcon = styled(FiEdit2)`
  width: 14px;
  height: 14px;
`;
