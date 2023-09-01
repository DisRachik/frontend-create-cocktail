// Libs
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const CategoryItem = styled.li`
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const ImageDrinks = styled.img`
  margin-bottom: 14px;
  width: 335px;
  height: 360px;

  @media screen and (min-width: 768px) {
    width: 342px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const TitleDrinks = styled.p`
  font-size: ${theme.fontSizes.large};

  line-height: calc(24 / 18);
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.smallTitle};
    line-height: calc(32 / 24);
  }
`;

export const SeeIngredients = styled(Link)`
  color: rgba(243, 243, 243, 0.5);

  font-size: ${theme.fontSizes.small};

  line-height: calc(18 / 14);
  // margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    // margin-bottom: 24px;
    font-size: ${theme.fontSizes.medium};
    line-height: calc(18 / 16);
    margin-left: 0px;
  }

  @media screen and (min-width: 1440px) {
    // margin-bottom: 24px;
  }
  &:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    box-shadow: ${theme.shadows.regular};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;