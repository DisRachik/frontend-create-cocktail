import styled from '@emotion/styled';
import { theme } from 'styles';

export const DropDawnContainer = styled.div`
  width: 177px;
  height: 134px;
  flex-shrink: 0;

  border-radius: 8px;
  background: #161f37;

  display: flex;
  flex-direction: column;

  padding: 18px;
`;

export const DropDawn_text = styled.p`
  color: ${theme.colors.lightGray};
  font-family: Manrope;
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 500;
  line-height: calc(14 / 18);
`;
