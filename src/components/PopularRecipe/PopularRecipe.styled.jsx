// Libs
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CocktailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 14px;
`;

export const CocktailImg = styled.img`
  display: block;
  border-radius: 8px;
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
`;
