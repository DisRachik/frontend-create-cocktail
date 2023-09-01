import styled from '@emotion/styled';

export const DropDown = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  top: 100%;
  left: -25%;

  width: 177px;
  height: 134px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.midnightBlue};

  transform-origin: top;
  transform: ${({ drop }) => {
    return drop ? 'scaleY(1)' : 'scaleY(0)';
  }};

  transition: transform 0.1s;
`;

export const ProfileBtn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 56px;

  :hover {
    color: ${({ theme }) => theme.colors.steelBlue};
  }
`;

export const ProfileBtnText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 45px;
  border: ${({ theme }) => theme.colors.steelBlue} solid 1px;
  border-radius: 42px;

  font-size: ${({ theme }) => theme.fontSizes.small};
  text-decoration: none;

  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightGray};

  :hover {
    color: ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.steelBlue};
  }
`;
