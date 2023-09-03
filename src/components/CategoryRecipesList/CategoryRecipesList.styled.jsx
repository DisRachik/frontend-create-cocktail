import styled from '@emotion/styled';

export const CatigoryList = styled.ul`
  //outline: 1px solid tomato;
  margin-bottom: 40px;
 padding-top: 40px;
  justify-items: center;
 display: grid;
  max-width: 1240px;
  min-height: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;


  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
    column-gap: 14px;
    
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 80px;
     row-gap: 80px;
    column-gap: 20px;
  }
`;

export const ButtonContainer = styled.div`
//outline: 1px solid tomato;

  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
//   padding: 80px 0px;
display: flex-inline; ;
justify-content: center;
align-items: center;
text-align: center;

`;