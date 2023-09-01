import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const FormWrap = styled.form`
  max-width: 400px;
`;

export const AuthTitle = styled.h2`
  font-size: ${theme.fontSizes.titlePhone};
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;

  text-align: start;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.title};

    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 28px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const LinkWrap = styled.div`
  margin-top: 14px;
  text-align: center;
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.ultraSmall};
  line-height: calc(16 / 12);
  text-decoration-line: underline;

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.small};
    line-height: calc(18 / 14);
  }
`;
