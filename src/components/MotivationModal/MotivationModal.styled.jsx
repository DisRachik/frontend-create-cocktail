import styled from '@emotion/styled';
import contentSvg from 'img/Vector 2.svg';

import { theme } from 'styles/theme';

export const MotivationWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  padding-top: 218px;
  padding-bottom: 40px;

  width: 500px;
  height: 500px;
  border-radius: 30px;

  background-image: url(${props => props.image});
  background-size: cover;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;

  width: 268px;
  height: 242px;
  padding-top: 32px;
  padding-bottom: 14px;

  border-radius: 19px 20% 30% 34%;

  backdrop-filter: blur(5px);
  background-image: url('${contentSvg}');
`;

export const ContentText = styled.p`
  padding: 0 18px;
  font-size: ${({ theme }) => theme.fontSizes.titlePhone};
`;

export const CloseBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 8px;
  color: ${theme.colors.lightGray};
  background-color: ${theme.colors.midnightBlue};

  :hover,
  :focus {
    color: ${theme.colors.steelBlue};
    border: ${theme.colors.steelBlue} solid 1px;
  }
`;
