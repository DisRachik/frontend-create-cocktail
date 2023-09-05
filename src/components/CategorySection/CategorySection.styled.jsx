import styled from '@emotion/styled';
import { theme } from 'styles';
import { Link } from 'react-router-dom';
export const CategorySectionWrap = styled.section`
 
  max-width: 1240px;
  min-height: 100%;
  margin: 0 auto;
  padding: 40px 32px;
  @media (min-width: 768px) {
     padding: 80px 20px;
  }

  @media (min-width: 1200px) {
   
    padding-bottom: 80px;
    padding: 100px, 0;
    
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
