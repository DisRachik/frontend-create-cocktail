import styled from '@emotion/styled';
import { theme } from 'styles';
import background1 from "../../img/mae-mu-T7heq8rawkc-unsplash 1.png";
import background2 from "../../img/mae-mu-T7heq8rawkc-unsplash 2.png";
import background3 from "../../img/mae-mu-T7heq8rawkc-unsplash 3.png";

export const MainSectionWrap = styled.section`
  outline: 1px solid tomato;
 display: flex-inline;
 justify-content: st;
 flex-direction: column;

  // gap: 28px;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
   padding: 80px 20px;

  @media (min-width: 768px) {
     padding: 140px 32px;
//      width: 500px;
//   height: 72px;
//   margin-left: 100px;
// font-size: 18px;
// font-weight: 400;
// line-height: 24px;
  }

  @media (min-width: 1200px) {
     padding: 160px 100px 140px 100px;
//     width: 1440px;
//   height: 100%; 
//   margin-left: 100px;
//   padding-bottom: 316px;
// font-size: 18px;
// font-weight: 400;
// line-height: 24px;
  }
`;

export const MainSectionSubtitle = styled.p`
   
  margin-bottom: 8px;
  color:${theme.colors.lightGray};
  line-height: 1.25;

  @media (min-width: 768px) {
   width: 500px;
  height: 72px;
  margin-bottom: 40px;
  // margin-left: 100px;
font-size: 18px;
font-weight: 400;
line-height: 24px;
  }
`;

export const MainSectionTitle = styled.h2`
  max-width: 715px;
  // margin-top: 244px;
  // color:${theme.colors.lightGray};
  color:${theme.colors.lightGray};
//  margin-left: 100px;
 margin-bottom: 28px;
  font-size: ${theme.fontSizes.sectionTitle};
  font-weight: 600;
  line-height: 1.0625;
`;
export const BackgroundImageWrap = styled.div`
background-size: 496px 700px;
  background-repeat: no-repeat;
 background-position: top 106 left 102;
background-image: linear-gradient(0.95deg, #0A0A11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
 linear-gradient(86.16deg, #0A0A11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url('${background3}');

   @media screen and (min-width: 480px) {
// width: 769px;
//   height: 100%; 
  background-size: 710px 1001px; 
background-image: linear-gradient(0.95deg, #0A0A11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
 linear-gradient(86.16deg, #0A0A11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url('${background2}');

   }

    @media screen and (min-width: 768px) {   
    width: 1440px;
  height: 790px; 
    margin: 0 auto;
  background-size: 710px 790px;
  background-repeat: no-repeat;
 background-position: top 0 right 0px;
background-image: linear-gradient(0.95deg, #0A0A11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
 linear-gradient(86.16deg, #0A0A11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url('${background1}');
  }


`;
export const ButtonContainer = styled.div`
margin: 0 auto;
display: flex-inline;
justify-content: center;
align-items: center;
margin-left: 550px;
`;