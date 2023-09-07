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

export const BurgerMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
  transition: ${props =>
    props.theme.animation('background-color, color, box-shadow')};

  &:hover,
  &:focus {
    /* color: ${({ theme }) => theme.colors.successGreen}; */
    /* box-shadow: ${({ theme }) => theme.shadows.regular}; */
    /* background-color: ${({ theme }) => theme.colors.steelBlue}; */

    svg {
      filter: drop-shadow(5px 5px 5px rgba(250, 250, 250, 0.7));
    }
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
