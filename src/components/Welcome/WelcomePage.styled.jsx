import styled from '@emotion/styled';
import img from '../../img/welcome.jpg';
// import { theme } from 'styles';

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
  /* background: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
    linear-gradient(87deg, #060609 0%, rgba(10, 10, 17, 0) 100%);

  background-image: url('${img}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    background-size: cover;
  }

  @media (min-width: 1200px) {
    background-size: contain;
  } */
`;

export const SectionWelcome = styled.section`
  outline: 1px solid tomato;

  /* max-width: 1440px;
  margin: 0 auto;
  padding-top: 304px;
  padding-bottom: 304px;
  /* padding: 80px 20px; */

  /* @media (min-width: 768px) {
    padding-top: 400px;
    padding-bottom: 400px;
    padding: 140px 32px;
  }

  @media (min-width: 1200px) {
    padding-top: 273px;
    padding-bottom: 273px;
    padding: 160px 100px 140px 100px;
  } */
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

export const WelcomeTitle = styled.h2`
  color: #fafafa;
  font-feature-settings: 'liga' off;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;

  margin-bottom: 14px;

  @media (min-width: 768px) {
    color: #fafafa;
    font-feature-settings: 'liga' off;
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 110% */
    letter-spacing: -0.8px;
  }

  @media (min-width: 1200px) {
    color: #fafafa;
    font-feature-settings: 'liga' off;
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 110% */
    letter-spacing: -0.8px;
  }
`;

export const Text = styled.p`
  color: #fafafa;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    color: #fafafa;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.36px;

    text-align: start;
  }

  @media (min-width: 1200px) {
    color: #fafafa;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.36px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 14px;

  @media (min-width: 768px) {
    justify-content: start;
  }

  /* @media (min-width: 1200px) {
    max-width: 485px;
  } */
`;
