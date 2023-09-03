import styled from '@emotion/styled';
import { theme } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 335px;
  height: 193px;

  background-color: ${theme.colors.midnightBlue};
  border-radius: 16px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 25px;

  @media screen and (min-width: 768px) {
    padding: 50px;
    width: 500px;
    height: 215px;
  }
`;

export const ContentText = styled.p`
  margin-bottom: 25px;
  color: ${theme.colors.lightGray};
  text-align: center;
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    letter-spacing: -0.36px;
    line-height: calc(24 / 18);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 12px;
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0 25px;
  }
`;
