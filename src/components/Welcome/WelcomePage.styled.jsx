import styled from '@emotion/styled';
import desktop from '../../img/def/des.jpg';
import tablet from '../../img/def/tab.jpg';
import mobile from '../../img/def/mob.jpg';
import { theme } from 'styles';

export const Wrapper = styled.div`
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 46.3%,
    rgba(0, 0, 0, 0.35) 72.75%,
    rgba(0, 0, 0, 0.6) 100%
  ); */
`;

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
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),
    url('${mobile}'),
    lightgray -3px -13.319px / 100.511% 101.679% no-repeat/ right/ contain; */

  background-image: url('${mobile}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (min-width: 768px) {
    background-image: url('${tablet}');
  }

  @media (min-width: 1200px) {
    background-image: url('${desktop}');
  }

  /* \\\\\\\\\\\\\\\\\\\\\\\\\\\\ */

  /* background-image: url('${desktop}');
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url('${mobile}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (min-width: 768px) {
    background-image: url('${tablet}');
  }

  @media (min-width: 1200px) {
    background-image: url('${desktop}');
    background-size: cover;
  } */
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
