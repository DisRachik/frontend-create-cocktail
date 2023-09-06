import PropTypes from 'prop-types';
import { SectionWrap, SectionTitle, SectionSubtitle } from './Section.styled';

export const Section = ({ title, pretitle, children }) => (
  <SectionWrap>
    {pretitle && <SectionSubtitle>{pretitle}</SectionSubtitle>}
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionWrap>
);

Section.propTypes = {
  pretitle: PropTypes.string,
  title: PropTypes.string,
};
