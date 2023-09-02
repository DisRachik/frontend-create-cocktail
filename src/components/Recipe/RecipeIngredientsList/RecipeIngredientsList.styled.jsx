import styled from '@emotion/styled';

import { theme } from 'styles';

export const IngredientsWrap = styled.div`
  margin-bottom: 80px;

  @media (min-width: 1200px) {
    margin-bottom: 100px;
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

  @media (min-width: 1200px) {
    gap: 35px;
  }
`;

export const IngredientsListItem = styled.li`
  width: 157px;

  @media (min-width: 768px) {
    width: 220px;
  }
`;

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
  align-items: baseline;
`;

export const IngredientTitle = styled.p`
  width: 50%;
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
