import styled from '@emotion/styled';

export const CatigoryList = styled.ul`
  // margin-bottom: 40px;
  padding-top: 40px;
  display: grid;
  max-width: 1200px;
  min-height: 100%;
  // margin: 0 auto;
  grid-template-columns: repeat(1, 1fr);
  li:not(:first-of-type) {
    display: none;
  }
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 14px;
    // padding: 0px 32px;
    li:nth-of-type(2) {
      display: grid;
    }
    // column-gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    li:not(:first-of-type) {
      display: grid;
    }
    // margin-bottom: 80px;
    // column-gap: 20px;
  }
`;

export const ButtonContainer = styled.div`
  //outline: 1px solid tomato;

  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  padding: 80px 0px;
  display: flex-inline;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 140px 0px;
  }
`;
