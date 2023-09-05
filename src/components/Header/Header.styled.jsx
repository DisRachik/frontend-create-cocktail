import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  padding: 20px 0;

  border-bottom: ${({ theme }) => theme.colors.steelBlue} solid 1px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const BurgerMenu = styled.div`
  height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
