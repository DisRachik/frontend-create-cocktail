import styled from '@emotion/styled';

export const UserBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserText = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: calc(18 / 16);
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
