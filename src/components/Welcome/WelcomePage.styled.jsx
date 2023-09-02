import styled from '@emotion/styled';
import { theme } from 'styles';
import desktopWebp from '../../img/welcome/des.webp';
import desktopWebp2x from '../../img/welcome/des_@2x.webp';
import tabletWebp from '../../img/welcome/tab.webp';
import tabletWebp2x from '../../img/welcome/tab_@2x.webp';
import mobileWebp from '../../img/welcome/mob.webp';
import mobileWebp2x from '../../img/welcome/mob_@2x.webp';

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
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 20) 21.93%),
    linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 20) 51.07%);

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
  left: 42px;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  @media (min-width: 768px) {
    width: 387px;
    height: 372px;
    top: 46px;
    left: 0;
  }

  @media (min-width: 1200px) {
    left: 170px;
    top: -130px;
  }
`;

export const Left = styled.div`
  position: absolute;
  width: 520px;
  height: 550px;

  top: 20px;
  left: -400px;
  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
  @media (min-width: 768px) {
    width: 784px;
    height: 830px;

    top: -50px;
    left: -600px;
  }

  @media (min-width: 1200px) {
    top: -100px;
    left: -500px;
  }
`;

export const Right = styled.div`
  position: absolute;
  width: 549px;
  height: 543px;

  bottom: -400px;
  right: -280px;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media (min-width: 768px) {
    bottom: -10px;
  }

  @media (min-width: 1200px) {
    bottom: -100px;
    right: -150px;
  }
`;

export const ContainerWelcome = styled.div`
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
  position: relative;
  background-image: url('${mobileWebp}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  overflow: hidden;

  @media (min-width: 768px) {
    background-image: url('${tabletWebp}');
  }

  @media (min-width: 1200px) {
    background-image: url('${desktopWebp}');
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url('${mobileWebp2x}');
    background-image: -webkit-image-set(
      url('${mobileWebp2x}') 2x,
      url('${mobileWebp}') 1x
    );

    @media (min-width: 768px) {
      background-image: url('${tabletWebp2x}');
      background-image: -webkit-image-set(
        url('${tabletWebp2x}') 2x,
        url('${tabletWebp}') 1x
      );
    }

    @media (min-width: 1200px) {
      background-image: url('${desktopWebp2x}');
      background-image: -webkit-image-set(
        url('${desktopWebp2x}') 2x,
        url('${desktopWebp}') 1x
      );
    }
  }
`;

export const SectionWelcome = styled.section``;

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
