import styled from '@emotion/styled';
import { theme } from 'styles';
import { Link } from 'react-router-dom';
export const CategorySectionWrap = styled.section`
  outline: 1px solid tomato;
//  display: flex-inline;
//  justify-content: st;
//  flex-direction: column;

  // gap: 28px;
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
   padding: 80px 20px;

  @media (min-width: 768px) {
     padding: 0px;
     gap: 28px;
//      width: 500px;
//   height: 72px;
//   margin-left: 100px;
// font-size: 18px;
// font-weight: 400;
// line-height: 24px;
  }

  @media (min-width: 1200px) {
    //  padding: 160px 100px 140px 100px;
//     width: 1440px;
//   height: 100%; 
//   margin-left: 100px;
//
gap: 28px;
padding-bottom: 80px;
padding: 100px,0;
font-family: Manrope;
font-size: 40px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: left;

  }
`;



export const CategorySectionTitle = styled(Link)`
  max-width: 715px;
  // color:${theme.colors.lightGray};
  color:${theme.colors.lightGray};
  margin-left: 100px;
//  margin-bottom: 40px;
//   font-size: ${theme.fontSizes.sectionTitle};
  font-weight: 600;
  line-height: 1.0625;
  font-family: Manrope;
     font-size: 40px;
  font-weight: 600;
  line-height: 44px;
   letter-spacing: 0em;
  text-align: left;
&:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    text-shadow: ${theme.shadows. light};
  }
`;
