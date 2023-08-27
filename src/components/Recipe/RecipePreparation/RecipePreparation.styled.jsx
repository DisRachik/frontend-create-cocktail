import styled from '@emotion/styled';

import { theme } from 'styles';

export const PreparationWrap = styled.div`
  border: 1px solid red;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 549px;
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

  @media (min-width: 1200px) {
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

  @media (min-width: 1200px) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const PreparationList = styled.ul`
  margin-bottom: 46px;
  margin-inline-start: 21px;
  list-style: unset;

  @media (min-width: 768px) {
    max-width: 549px;
    margin-inline-start: 24px;
  }

  @media (min-width: 1200px) {
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
    max-width: 549px;
    font-size: ${theme.fontSizes.medium};
    line-height: 22px;
  }
`;

export const PreparationImg = styled.img`
  width: 335px;
  height: 430px;
  margin: 0px auto;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;

  background-color: ${theme.colors.gray};

  @media (min-width: 768px) {
    width: 704px;
    height: 340px;
    margin: 0px;
  }

  @media (min-width: 1200px) {
    grid-area: 2 / 1 / 4 / 2;
    width: 631px;
    height: 430px;
  }
`;
