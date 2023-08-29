import styled from '@emotion/styled';

export const HeaderWrrap = styled.div`
  display: flex;
  justify-content: space-between;

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
  /* padding-right: 20px; */

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

// export const UserLogo = styled.div`
//   @media screen and (min-width: 1200px) {
//     padding-right: 32px;
//   }
// `;

export const MenuBtn = styled.div`
  /* display: block; */

  height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
