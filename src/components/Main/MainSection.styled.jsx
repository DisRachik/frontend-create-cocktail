import styled from '@emotion/styled';
import { theme } from 'styles';
import desktopWebp from '../../img/main/des.webp';
import desktopWebp2x from '../../img/main/des_2x.webp';
import tabletWebp from '../../img/main/tab.webp';
import tabletWebp2x from '../../img/main/tab_2x.webp';
import mobileWebp from '../../img/main/mob.webp';
import mobileWebp2x from '../../img/main/mob_2x.webp';

export const MainSectionWrap = styled.section`

  max-width: 1440px;
  margin: 0 auto;
  height: 796px;
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 140px 32px;
    height: 1001px;
  }

  @media (min-width: 1440px) {
    padding: 160px 100px 140px 100px;
    max-width: 1440px;
    height: 790px;
  }
`;

export const MainSectionSubtitle = styled.p`
  margin-bottom: 32px;
  color: ${theme.colors.lightGray};
  line-height: 1.25;
  max-width: 266px;
  font-size: 14px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: ${theme.fontSizes.sectionTitleTablet};
    max-width: 449px;
    font-size: 18px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1240px) {
    padding-bottom: 40px;
    font-size: ${theme.fontSizes.sectionTitle};
    font-size: 18px;
    line-height: 1.06;
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 72px;
    padding-bottom: 40px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const MainSectionTitle = styled.h1`
  max-width: 279px;
  margin-bottom: 28px;
  font-size: ${theme.fontSizes.sectionTitlePhone};
  color: ${theme.colors.lightGray};
  font-weight: 600;
  line-height: 1.18;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.sectionTitleTablet};
    max-width: 483px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1200px) {
    font-size: ${theme.fontSizes.sectionTitle};
    max-width: 715px;
    line-height: 1.06;
  }
`;
export const BackgroundImageWrap = styled.div`
 

  background-image: url('${mobileWebp}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top -84px;



  @media (min-width: 768px) {
    background-image: url('${tabletWebp}');
    background-position: right top -84px;
  }

  @media (min-width: 1200px) {
    background-image: url('${desktopWebp}');
    background-position: top -84px ;
    
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

export const BackgroundMainGradient = styled.div`
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
        rgba(10, 10, 17, 0.4) 100%
      ),
      linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
      linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%);
  }`
;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex-inline;
  justify-content: center;
  align-items: center;
  margin-left: 550px;
`;
