import styled from '@emotion/styled';

import { theme } from 'styles';

export const PreparationSection = styled.section`
  max-width: 1440px;
  margin: 0px auto 80px;
  border: 1px solid red;
  padding: 0px 20px;
  font-family: Manrope;

  @media (min-width: 768px) {
    margin-bottom: 140px;
    padding: 0px 32px;
  }

  @media (min-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto repeat(1, 1fr);
    grid-column-gap: 60px;
  }
`;

export const PreparationTitle = styled.h3`
  margin-bottom: 40px;
  color: ${theme.colors.lightGray};
  font-size: ${theme.fontSizes.titlePhone};
  font-weight: 600;
  line-height: 32px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.title};
    line-height: 44px;
  }

  @media (min-width: 1440px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const PreparationForeword = styled.p`
  margin-bottom: 60px;
  color: ${theme.colors.lightGray};
  font-size: ${theme.fontSizes.small};
  line-height: 18px;

  @media (min-width: 768px) {
    max-width: 549px;
    font-size: ${theme.fontSizes.medium};
    line-height: 22px;
  }

  @media (min-width: 1440px) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const PreparationList = styled.ul`
  margin-bottom: 46px;
  list-style: unset;

  @media (min-width: 768px) {
    max-width: 549px;
  }

  @media (min-width: 1440px) {
    grid-area: 3 / 2 / 4 / 3;
    margin-bottom: 0px;
  }
`;

export const PreparationListItem = styled.li`
  padding-bottom: 14px;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${theme.colors.lightGray};
  font-size: ${theme.fontSizes.small};
  line-height: 18px;

  &:not(:first-of-type) {
    padding-top: 14px;
  }

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};
    line-height: 22px;
  }
`;

export const PreparationImg = styled.img`
  width: 335px;
  height: 430px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;

  background-color: ${theme.colors.gray};

  @media (min-width: 768px) {
    width: 704px;
    height: 340px;
  }

  @media (min-width: 1440px) {
    grid-area: 2 / 1 / 4 / 2;
  }
`;
