// Libs
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CocktailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) and (max-width: 1199.98px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1200px) {
    gap: 28px;
    max-width: 360px;
  }
`;

export const CocktailItem = styled.li`
  @media screen and (min-width: 768px) and (max-width: 1199.98px) {
    flex-basis: calc(50% - 32px);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 14px;
  height: 90px;
  overflow: hidden;
`;

export const CocktailImg = styled.img`
  display: block;
  border-radius: 8px;
  width: 90px;
  height: 90px;
`;

export const CocktailTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(22 / 16);
  margin-bottom: 8px;
`;

export const CocktailText = styled.h3`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
