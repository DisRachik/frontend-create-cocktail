import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export const LogoImg = styled.img`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.lightGray};

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const LogoText = styled.span`
  font-weight: 600;
  line-height: calc(18 / 16);
  color: ${({ theme }) => theme.colors.lightGray};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: calc(22 / 18);
  }
`;
