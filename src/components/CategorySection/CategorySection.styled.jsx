import styled from '@emotion/styled';
import { theme } from 'styles';
import { Link } from 'react-router-dom';
export const CategorySectionWrap = styled.section`
 
  max-width: 1440px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
     padding: 0 32px;
     padding-bottom: 80px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
    padding-bottom: 80px;
    
    
  }
`;

export const CategorySectionTitle = styled(Link)`
  max-width: 715px;
  color: ${theme.colors.lightGray};
  font-weight: 600;
  line-height: 1.0625;
  font-family: Manrope;
  font-size:  ${theme.fontSizes.titlePhone};
  letter-spacing: 0em;
  text-align: left;

  @media (min-width: 768px) {
   font-size:  ${theme.fontSizes.title}; 
    }

    @media (min-width: 1200px) {
      font-size:  ${theme.fontSizes.title}; 
    }

  &:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    text-shadow: ${theme.shadows.light};
  }
`;
