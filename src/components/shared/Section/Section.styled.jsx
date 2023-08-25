import styled from '@emotion/styled';
import { theme } from 'styles';

export const SectionWrap = styled.section`
  outline: 1px solid tomato;

  max-width: 1440px;
  margin: 0 auto;
  padding: 160px 100px 140px 100px;
`;

export const SectionSubtitle = styled.p`
  margin-top: -28px;
  margin-bottom: 8px;
  opacity: 0.5;
  line-height: 1.25;
`;

export const SectionTitle = styled.h2`
  max-width: 715px;
  font-size: ${theme.fontSizes.sectionTitle};
  font-weight: 600;
  line-height: 1.0625;
`;
