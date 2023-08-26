import styled from '@emotion/styled';
import { theme } from 'styles';

export const SectionWrap = styled.section`
  outline: 1px solid tomato;

  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 140px 32px;
  }

  @media (min-width: 1200px) {
    padding: 160px 100px 140px 100px;
  }
`;

export const SectionSubtitle = styled.p`
  margin-top: -22px;
  margin-bottom: 8px;
  opacity: 0.5;
  line-height: 1.25;

  @media (min-width: 768px) {
    margin-top: -28px;
  }
`;

export const SectionTitle = styled.h2`
  max-width: 715px;
  font-size: ${theme.fontSizes.sectionTitle};
  font-weight: 600;
  line-height: 1.0625;
`;
