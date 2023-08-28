import styled from '@emotion/styled';

export const UserBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;

  /* @media screen and (min-width: 1200px) {
    padding-right: 100px;
  } */
`;

export const UserImg = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

export const UserText = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: calc(18 / 16);
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: none;
`;
