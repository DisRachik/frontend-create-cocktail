import styled from '@emotion/styled';

import { theme } from 'styles';

export const HeroSection = styled.section`
  max-width: 1440px;
  margin: 0px auto 40px;
  border: 1px solid red;
  padding: 58px 20px 0px 20px;
  font-family: Manrope;

  @media (min-width: 768px) {
    margin-bottom: 80px;
    padding: 112px 32px 0px 32px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 100px;
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-template-rows: 24px minmax(400px, max-content);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-top: 132px;
    padding-bottom: 0px;
  }
`;

export const LeftSideWrap = styled.div`
  @media (min-width: 1440px) {
    grid-area: 1 / 1 / 3 / 2;
  }
`;

export const CocktailGlass = styled.p`
  margin-bottom: 8px;
  font-size: ${theme.fontSizes.ultraSmall};
  line-height: 14px;
  color: ${theme.colors.grayOpacity};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};
    line-height: 20px;
  }
`;

export const CocktailTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
    font-size: ${theme.fontSizes.sectionTitleTablet};
    line-height: 60px;
  }

  @media (min-width: 1440px) {
    font-size: ${theme.fontSizes.sectionTitle};
    line-height: 68px;
  }
`;

export const CocktailDescription = styled.p`
  margin-bottom: 40px;
  color: ${theme.colors.lightGray};
  font-size: ${theme.fontSizes.small};
  line-height: 18px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: ${theme.fontSizes.medium};
    line-height: 22px;
  }
`;

export const FavoriteButton = styled.button`
  margin-bottom: 80px;
  padding: 14px 40px;
  background-color: ${theme.colors.lightGray};
  border-radius: 42px;
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  line-height: 18px;
  color: ${theme.colors.midnightBlue};

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: ${theme.fontSizes.medium};
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    margin: 0px;
  }
`;

export const CocktailImage = styled.img`
  width: 335px;
  height: 400px;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-position: top;
  }

  @media (min-width: 1440px) {
    grid-area: 2 / 2 / 3 / 3;
    width: 400px;
    height: 400px;
  }
`;
