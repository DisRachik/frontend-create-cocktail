import styled from '@emotion/styled';
import { theme } from 'styles';
import { FiEdit2 } from 'react-icons/fi';

export const DropDawnContainer = styled.div`
  width: 177px;
  height: 134px;
  flex-shrink: 0;

  border-radius: 8px;
  background: #161f37;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 18px;
`;

export const DropDawnTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;

export const DropDawnText = styled.p`
  color: ${theme.colors.lightGray};

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

  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);
  white-space: nowrap;

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
  color: ${theme.colors.lightGray};
`;
