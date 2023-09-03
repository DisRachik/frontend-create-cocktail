// Libs
import styled from '@emotion/styled';
// Theme
import { theme } from 'styles';

export const IngredientsBox = styled.div`
  margin-bottom: 80px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const IngredientsTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);
`;

export const SelectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SelectListItem = styled.li`
  display: flex;
  gap: 8px;
`;

export const RemoveBtn = styled.button`
  color: ${theme.colors.lightGrayTransparent};

  &:hover,
  &:focus {
    color: ${theme.colors.lightGray};
  }
`;

export const selectStyles = {
  control: baseStyles => ({
    ...baseStyles,
    padding: '14px 16px',
    height: '50px',
    width: '200px',
    fontSize: '14px',
    lineHeight: 'calc(18 / 14)',
    backgroundColor: 'transparent',
    borderRadius: '100px',
    border: `1px solid ${theme.colors.lightGrayTransparent}`,
    cursor: 'text',
  }),

  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    height: '165px',
    padding: '18px 24px',
    fontSize: '14px',
    overflowX: 'hidden',
    color: `${theme.colors.lightGrayTransparent}`,
    borderRadius: '20px',
    backgroundColor: `${theme.colors.midnightBlue}`,
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    padding: 0,
    textWrap: 'nowrap',
    color: state.isSelected ? `${theme.colors.lightGray}` : 'inherit',
    '&:hover': {
      color: `${theme.colors.lightGray}`,
    },
  }),

  placeholder: baseStyles => ({
    ...baseStyles,
    textWrap: 'nowrap',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const measureSelectStyles = {
  ...selectStyles,
  control: baseStyles => ({
    ...baseStyles,
    padding: '14px 16px',
    height: '50px',
    width: '101px',
    fontSize: '14px',
    lineHeight: 'calc(18 / 14)',
    backgroundColor: 'transparent',
    borderRadius: '100px',
    border: `1px solid ${theme.colors.lightGrayTransparent}`,
    cursor: 'text',
  }),
};
