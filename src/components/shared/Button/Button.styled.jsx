import styled from '@emotion/styled';
import { theme } from 'styles';

const getColorStyle = props => {
  if (props.transparent) {
    return {
      backgroundColor: 'transparent',
      color: theme.colors.lightGray,
      border: '1px',
      borderStyle: 'solid',
      borderColor: theme.colors.transparentLight,
    };
  } else {
    return {
      backgroundColor: theme.colors.lightGray,
      color: theme.colors.midnightBlue,
    };
  }
};

const getMinWidthStyle = props => {
  return {
    display: props.minWidth ? 'flex' : 'inline-flex',
    minWidth: props.minWidth ? props.minWidth : 'auto',
  };
};

export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  padding: 18px 44px;
  flex-grow: 1;
  border-radius: 42px;
  cursor: pointer;
  transition: ${props =>
    props.theme.animation('background-color, color, box-shadow')};

  ${getColorStyle}
  ${getMinWidthStyle}

  &:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    box-shadow: ${theme.shadows.regular};
  }

  &:disabled {
    color: ${theme.colors.transparentLight};
    background-color: ${theme.colors.steelBlue};
    cursor: not-allowed;
  }
`;
