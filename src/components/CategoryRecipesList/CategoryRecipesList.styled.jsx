import styled from '@emotion/styled';

export const CatigoryList = styled.ul`
  outline: 1px solid tomato;
  margin-bottom: 80px;
 padding-top: 40px;
  justify-items: center;
 display: grid;
  max-width: 1240px;
  min-height: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;


  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
    column-gap: 14px;
    
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
     row-gap: 80px;
    column-gap: 20px;
  }
`;

