import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { theme } from 'styles';
import styled from '@emotion/styled';

export const PaginWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const PaginListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const ArrowBtn = styled.button`
  transition: ${theme.animation('opacity')};

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  :focus {
    outline: 1px solid ${theme.colors.grayOpacity};
  }
`;
const arrowStyles = `
  color: ${theme.colors.lightGray};
  width: 28px;
  height: 35px;
  transition: ${theme.animation('color')};
  transition: ${theme.animation('scale')};

  :hover,
  :focus {
    color: ${theme.colors.lightGray};
    scale: 1.5;
  }
`;

export const ArrowPrev = styled(MdOutlineKeyboardArrowLeft)`
  ${arrowStyles}
`;

export const ArrowNext = styled(MdOutlineKeyboardArrowRight)`
  ${arrowStyles}
`;

export const BtnItem = styled.button`
  color: ${theme.colors.transparentLight};
  border-radius: 50%;
  width: 27px;
  height: 27px;

  transition: ${theme.animation('scale')};
  transition: ${theme.animation('background-color')};
  transition: ${theme.animation('color')};

  &:hover {
    scale: 1.2;
    background-color: rgba(64, 112, 205, 0.2);
    color: ${theme.colors.lightGray};
    outline: 1px solid ${theme.colors.grayOpacity};
  }

  &:focus {
    outline: none;
  }

  &.active {
    background-color: ${theme.colors.lightBlueLight};
    color: ${theme.colors.lightGray};
    :hover,
    :focus {
      scale: 1;
    }
  }
`;
