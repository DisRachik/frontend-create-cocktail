import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FormWrap = styled.form`
  max-width: 400px;
`;

export const SignUpTitle = styled.h2`
  color: #f3f3f3;
  font-feature-settings: 'liga' off;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;

  text-align: start;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    color: #f3f3f3;
    font-feature-settings: 'liga' off;
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 110% */
    letter-spacing: -0.8px;
  }

  @media (min-width: 1200px) {
    color: #f3f3f3;
    font-feature-settings: 'liga' off;
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 110% */
    letter-spacing: -0.8px;
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 28px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  /* @media (min-width: 1200px) {
  } */
`;

export const LinkWrap = styled.div`
  margin-top: 14px;
  text-align: center;
`;

export const Link = styled(NavLink)`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;

  @media (min-width: 768px) {
    color: #f3f3f3;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 128.571% */
    text-decoration-line: underline;
  }

  @media (min-width: 1200px) {
    color: #f3f3f3;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 128.571% */
    text-decoration-line: underline;
  }
`;
