import styled from '@emotion/styled';
import img from '../../img/welcome/des.jpg';
import { theme } from 'styles';

export const ContainerWelcome = styled.div`
  outline: 1px solid tomato;

  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 64px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url('${img}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const SectionWelcome = styled.section`
  outline: 1px solid tomato;
`;

export const WelcomeWrap = styled.div`
  max-width: 485px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 470px;
    text-align: start;
  }

  @media (min-width: 1200px) {
    max-width: 485px;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: ${theme.fontSizes.titlePhone};
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;

  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.title};
    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.small};
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    line-height: calc(24 / 18);
    letter-spacing: -0.36px;

    text-align: start;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 14px;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;
