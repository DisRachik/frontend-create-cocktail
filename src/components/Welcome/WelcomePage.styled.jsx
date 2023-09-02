import styled from '@emotion/styled';
import desktop from '../../img/def/des.jpg';
import tablet from '../../img/def/tab.jpg';
import mobile from '../../img/def/mob.jpg';
import { theme } from 'styles';

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 58.58%,
    rgba(0, 0, 0, 0.35) 78.98%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const BackgroundGradient = styled.div`
  background: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(82deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%);

  @media (min-width: 768px) {
    background: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
      linear-gradient(78deg, #0a0a11 14.73%, rgba(10, 10, 17, 0) 52.34%);
  }

  @media (min-width: 1200px) {
    background: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
      linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%);
  }
`;

export const Top = styled.div`
  position: absolute;
  width: 257px;
  height: 247px;

  top: 84px;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const Right = styled.div`
  position: absolute;
  width: 549px;
  height: 543px;

  bottom: -400px;
  right: -200px;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media (min-width: 768px) {
    bottom: -200px;
  }

  @media (min-width: 1200px) {
    bottom: -300px;
  }
`;

export const Left = styled.div`
  position: absolute;
  width: 520px;
  height: 550px;
  flex-shrink: 0;

  top: 20px;
  left: -400px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const ContainerWelcome = styled.div`
  /* outline: 1px solid tomato; */

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

  position: relative;
  background-image: url('${mobile}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  overflow: hidden;

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
  /* outline: 1px solid tomato; */
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
