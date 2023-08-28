import styled from '@emotion/styled';
import { theme } from 'styles';

const getColorStyle = props => {
  if (props.transparent) {
    return {
      paddingTop: '14px',
      paddingBottom: '14px',
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
    width: props.minWidth ? props.minWidth : 'auto',
  };
};
const getMinHeightStyle = props => {
  return {
    minHeight: props.minHeight ? props.minHeight : 'auto',
  };
};

export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  flex-grow: 1;
  border-radius: 42px;
  cursor: pointer;
  transition: ${props =>
    props.theme.animation('background-color, color, box-shadow')};

  ${getColorStyle}
  ${getMinWidthStyle}
  ${getMinHeightStyle}

  @media (min-width: 768px) {
    padding: 18px 44px;
  }

  &:hover {
    color: ${theme.colors.lightGray};
    background-color: transparent;
    box-shadow: ${theme.shadows.regular};
  }

  &:disabled {
    color: ${theme.colors.transparentLight};
    background-color: ${theme.colors.steelBlue};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
