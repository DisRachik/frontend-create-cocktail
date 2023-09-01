import styled from '@emotion/styled';

export const DrinksList = styled.ul`
  margin-bottom: 40px;
  margin-top: 40px;
  display: grid;
  row-gap: 40px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
    column-gap: 20px;

    margin-top: 60px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);

    margin-top: 62px;
  }
`;
