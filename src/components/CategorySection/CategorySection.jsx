import PropTypes from 'prop-types';
import { CategorySectionWrap, CategorySectionTitle  } from './CategorySection.styled';

export const CategorySection = ({ title,  children }) => (
  <CategorySectionWrap>
    
    {title && <CategorySectionTitle>{title}</CategorySectionTitle>}
    {children}
  </CategorySectionWrap>
);

CategorySection.propTypes = {
    
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};
