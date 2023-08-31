import styled from '@emotion/styled';
import { theme } from 'styles';

export const Box = styled.div`
  padding: 80px 0 80px;

  @media (min-width: 768px) {
    padding: 100px 0 100px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: ${theme.fontSizes.sectionTitlePhone};
  font-weight: 600;
  line-height: 1.18;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: ${theme.fontSizes.sectionTitleTablet};
    line-height: 1.07;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${theme.fontSizes.sectionTitle};
    line-height: 1.06;
  }
`;

export const Text = styled.p`
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Subtitle = styled.h3`
  margin-bottom: 8px;
  text-transform: uppercase;
`;
