import styled from '@emotion/styled';

import { theme } from 'styles';

export const IngredientsSection = styled.section`
  max-width: 1440px;
  margin: 0px auto 80px;
  border: 1px solid red;
  padding: 0px 20px;
  font-family: Manrope;

  @media (min-width: 768px) {
    padding: 0px 32px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 100px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const SectionTitle = styled.p`
  margin-bottom: 20px;
  font-size: ${theme.fontSizes.medium};
  line-height: 20px;
  color: ${theme.colors.grayOpacity};

  @media (min-width: 768px) {
    margin-bottom: 24px;
    font-size: ${theme.fontSizes.medium};
    line-height: 20px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px 20px;

  @media (min-width: 768px) {
    gap: 22px;
  }

  @media (min-width: 1440px) {
    gap: 35px;
  }
`;

export const IngredientsListItem = styled.li``;

export const IngredientPicture = styled.picture`
  display: flex;
  width: 157px;
  height: 157px;
  margin-bottom: 8px;
  padding: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);

  @media (min-width: 768px) {
    margin-bottom: 14px;
    padding: 31px;
    width: 220px;
    height: 220px;
  }
`;

export const IngredientImage = styled.img`
  width: 107px;
  height: 107px;

  @media (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;

export const IngredientDescWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const IngredientTitle = styled.p`
  color: ${theme.colors.lightGray};
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    line-height: 24px;
  }
`;

export const IngredientMeasure = styled.p`
  color: ${theme.colors.grayOpacity};
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};
    line-height: 20px;
  }
`;
