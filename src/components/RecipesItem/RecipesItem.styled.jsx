// Libs
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const FavoriteItem = styled.li`
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
  margin-bottom: 18px;
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

export const Text = styled(Link)`
  display: inline-block;
  color: rgba(243, 243, 243, 0.5);

  font-size: ${theme.fontSizes.small};

  line-height: calc(18 / 14);
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: ${theme.fontSizes.medium};
    line-height: calc(18 / 16);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const DescriptionDrinks = styled.p`
  font-size: ${theme.fontSizes.small};

  line-height: calc(18 / 14);
  margin-bottom: 18px;

  align-items: stretch;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  min-height: 90px;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};

    line-height: calc(22 / 16);

    margin-bottom: 24px;
  }
`;

export const SeeRecipe = styled(Link)`
  padding: 14px 40px;
  margin-right: 8px;

  border-radius: 42px;

  background-color: ${theme.colors.midnightBlue};

  font-size: ${theme.fontSizes.small};

  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    padding: 18px 44px;

    font-size: ${theme.fontSizes.medium};

    line-height: calc(18 / 16);
  }

  &:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    box-shadow: ${theme.shadows.regular};
  }
`;

export const DeleteFavoriteDrinksBtn = styled.button`
  border-radius: 40px;

  background-color: ${theme.colors.midnightBlue};

  padding: 11px;
  width: 46px;

  height: 46px;

  @media screen and (min-width: 768px) {
    padding: 15px 16px;

    width: 56px;
    height: 54px;
  }

  &:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    box-shadow: ${theme.shadows.regular};
  }
`;

export const BatonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
