import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const CategoryItem = styled.li`
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.024) 51.18%,
    rgba(10, 10, 17, 0.768) 97.66%
  );

  max-width: 400px;

  &:hover,
  &:focus {
    a {
      color: ${theme.colors.lightGray};
      text-shadow: ${theme.shadows.light};

      border-color: ${theme.colors.transparentLight};
    }
  }
`;

export const ImageDrinks = styled.img`
  margin-bottom: 14px;
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  height: auto;
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
  padding: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 42px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);

  color: ${theme.colors.transparentLight};

  font-size: ${theme.fontSizes.small};

  line-height: calc(18 / 14);

  transition: ${props =>
    props.theme.animation(
      'background-color, color, box-shadow, border-color, padding'
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
