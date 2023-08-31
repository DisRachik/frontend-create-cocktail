import styled from '@emotion/styled';
import { theme } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const Picture = styled.picture`
  margin-top: -93px;
`;

export const Text = styled.p`
  text-align: center;

  font-size: ${theme.fontSizes.small};

  line-height: 1.28;

  width: 205px;

  margin-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};
    line-height: 1.375;

    width: 236px;

    margin-top: 18px;
  }
`;
