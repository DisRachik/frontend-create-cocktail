import PropTypes from 'prop-types';
import { ContainerWrap } from './Container.styled';

export const Container = ({ children }) => (
  <ContainerWrap>{children}</ContainerWrap>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};
