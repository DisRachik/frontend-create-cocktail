import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

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

export const ArrowPrev = styled(MdOutlineKeyboardArrowLeft)`
  color: rgba(243, 243, 243, 0.3);
  width: 18px;
  height: 25px;
`;
export const ArrowNext = styled(MdOutlineKeyboardArrowRight)`
  color: rgba(243, 243, 243, 0.3);
  width: 18px;
  height: 25px;
`;

export const BtnItem = styled.button`
  background-color: rgba(64, 112, 205, 0.5);
  color: rgba(243, 243, 243, 1);
  border-radius: 50%;
  width: 27px;
  height: 27px;
  margin-bottom: 10px;
`;
