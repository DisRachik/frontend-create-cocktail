import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const CategoryItem = styled.li`
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.024) 51.18%,
    rgba(10, 10, 17, 0.768) 97.66%
  );
  @media screen and (min-width: 320px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }

  &:hover,
  &:focus {
    a {
      padding: 0 10px;
      color: ${theme.colors.lightGray};
      text-shadow: ${theme.shadows.light};

      border: 2px solid ${theme.colors.transparentLight};
    }
  }
`;

export const ImageDrinks = styled.img`
  margin-bottom: 14px;
  width: 335px;
  height: 360px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (max-width: 374.98px) {
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
    margin-bottom: 14px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
    border-radius: 8px;
  }
`;
export const TitleDrinks = styled.p`
  font-size: ${theme.fontSizes.large};
  line-height: calc(24 / 18);
  margin-bottom: 4px;
  padding-right: 20px;  
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Ограничение на количество строк */
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.smallTitle};
    line-height: calc(32 / 24);
  }
`;



export const SeeIngredients = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 42px;

  color: rgba(243, 243, 243, 0.5);

  font-size: ${theme.fontSizes.small};

  line-height: calc(18 / 14);

  transition: ${props =>
    props.theme.animation(
      'background-color, color, box-shadow, border, padding'
    )};

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};
    line-height: calc(18 / 16);
    margin-left: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
  &:hover,
  &:focus {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    box-shadow: ${theme.shadows.regular};
  }
`;

export const TextContainer = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
