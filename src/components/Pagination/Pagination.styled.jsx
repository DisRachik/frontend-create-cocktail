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
  flex-wrap: wrap;
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

  &:disabled {
    opacity: 0;
  }
`;
export const ArrowPrev = styled(MdOutlineKeyboardArrowLeft)`
  color: ${theme.colors.lightGrayTransparent};
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
export const ArrowNext = styled(MdOutlineKeyboardArrowRight)`
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

export const BtnItem = styled.button`
  color: ${theme.colors.transparentLight};
  border-radius: 50%;
  width: 27px;
  height: 27px;
  margin-bottom: 10px;
  transition: ${theme.animation('scale')};
  transition: ${theme.animation('background-color')};
  transition: ${theme.animation('color')};

  &:focus,
  :hover {
    scale: 1.2;
  }

  &.active {
    background-color: ${theme.colors.lightBlueLight};
    color: ${theme.colors.lightGray};
  }
`;
