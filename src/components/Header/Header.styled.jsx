import styled from '@emotion/styled';

export const HeaderContainer = styled.header``;

export const HeaderWrrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: ${({ theme }) => theme.colors.steelBlue} solid 1px;

  padding: 20px 0;
`;

export const Image = styled.image`
  width: 44px;
  height: 44px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const BurgerMenu = styled.div`
  height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
