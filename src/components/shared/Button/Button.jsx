import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({
  disabled,
  minWidth,
  minHeight,
  transparent,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      minWidth={minWidth}
      minHeight={minHeight}
      transparent={transparent}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
