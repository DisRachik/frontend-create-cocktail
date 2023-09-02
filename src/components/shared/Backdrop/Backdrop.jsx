import PropTypes from 'prop-types';
import { BackdropStyled } from './Backdrop.styled';

export const Backdrop = ({ onClick, children }) => {
  return <BackdropStyled onClick={onClick}>{children}</BackdropStyled>;
};
Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};
