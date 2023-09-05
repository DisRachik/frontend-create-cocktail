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

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
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

export const TitleBox = styled.div`
  width: 58%;
`;

export const MeasureBox = styled.div`
  width: 35%;
`;

export const RemoveBtn = styled.button`
  position: relative;
  width: 26px;
  margin-left: auto;
  color: ${theme.colors.lightGrayTransparent};

  &:hover,
  &:focus {
    color: ${theme.colors.lightGray};
  }

  > svg {
    position: absolute;
    top: 12px;
    left: 0;
    width: 26px;
    height: 26px;

    @media screen and (min-width: 768px) {
      top: 15px;
    }
  }
`;

export const selectStyles = {
  container: baseStyles => ({
    ...baseStyles,
    width: '100%',
  }),

  control: baseStyles => ({
    ...baseStyles,
    padding: '14px 16px',
    height: '50px',
    width: '100%',
    fontSize: '14px',
    lineHeight: 'calc(18 / 14)',
    backgroundColor: 'transparent',
    borderRadius: '100px',
    border: `1px solid ${theme.colors.lightGrayTransparent}`,
    cursor: 'text',

    '@media screen and (min-width: 768px)': {
      height: '56px',
      padding: '14px 24px',
    },
  }),

  menuList: baseStyles => ({
    ...baseStyles,
    marginTop: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    height: '164px',
    padding: '18px 24px',
    fontSize: '14px',
    overflowX: 'hidden',
    color: `${theme.colors.lightGrayTransparent}`,
    borderRadius: '10px',
    backgroundColor: `${theme.colors.midnightBlue}`,

    // ============== scrollbar ==============

    '&::-webkit-scrollbar': {
      width: '20px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: `${theme.colors.lightGrayTransparent}`,
      border: `4px solid ${theme.colors.midnightBlue}`,
    },

    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: `${theme.colors.lightGray}`,
    },
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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const measureSelectStyles = {
  ...selectStyles,

  menuList: baseStyles => ({
    ...baseStyles,
    marginTop: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    height: '164px',
    padding: '18px 24px',
    fontSize: '14px',
    overflowX: 'hidden',
    color: `${theme.colors.lightGrayTransparent}`,
    borderRadius: '10px',
    backgroundColor: `${theme.colors.midnightBlue}`,

    // ============== scrollbar ==============

    '&::-webkit-scrollbar': {
      width: '20px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: `${theme.colors.lightGrayTransparent}`,
      border: `8px solid ${theme.colors.midnightBlue}`,
    },

    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: `${theme.colors.lightGray}`,
    },
  }),
};
