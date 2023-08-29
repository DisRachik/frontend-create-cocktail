import styled from '@emotion/styled';
import img from '../../img/welcome.jpg';
import { theme } from 'styles';

export const ContainerWelcome = styled.div`
  outline: 1px solid tomato;

  background: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
    linear-gradient(87deg, #060609 0%, rgba(10, 10, 17, 0) 100%);

  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url('${img}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SectionWelcome = styled.section`
  outline: 1px solid tomato;

  max-width: 1440px;
  min-height: 800px;
  margin: 0 auto;
  /* padding-top: 304px;
  padding-bottom: 304px; */
  padding: 80px 20px;

  @media (min-width: 768px) {
    /* padding-top: 400px;
    padding-bottom: 400px; */
    padding: 140px 32px;
  }

  @media (min-width: 1200px) {
    /* padding-top: 273px;
    padding-bottom: 273px; */
    padding: 160px 100px 140px 100px;
  }
`;

export const WelcomeWrap = styled.div`
  max-width: 485px;
`;

export const WelcomeTitle = styled.h2`
  font-size: ${theme.fontSizes.title};

  margin-bottom: 14px;

  /* @media (min-width: 768px) {
    padding: 140px 32px;
  }

  @media (min-width: 1200px) {
    padding: 160px 100px 140px 100px;
  } */
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 14px;
`;

export const Text = styled.p`
  display: flex;
  gap: 14px;

  margin-bottom: 40px;
`;
