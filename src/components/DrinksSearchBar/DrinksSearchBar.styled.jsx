import styled from '@emotion/styled';
import Select from 'react-select';
import { theme } from 'styles';

export const Form = styled.form`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: flex;
    gap: 8px;
    max-width: 678px;
  }
`;

export const SearchFieldWrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: ${theme.fontSizes.small};
  line-height: calc(18 / 14);
  width: 100%;
  padding: 18px 50px 18px 25px;
  background-color: transparent;
  border: 1px solid ${theme.colors.transparentLight};
  border-radius: 200px;
  color: ${theme.colors.lightGray};

  &::placeholder {
    color: ${theme.colors.lightGray};
  }

  @media (min-width: 768px) {
    min-width: 264px;
    padding: 14px 50px 14px 24px;
    font-size: ${theme.fontSizes.inputText};
    line-height: calc(26.52 / 17);
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Selector = styled(Select)`
  color: ${theme.colors.lightGrayTransparent};
  min-width: 199px;
`;

export const selectStyles = {
  control: baseStyles => ({
    ...baseStyles,
    minHeight: '18px',
    padding: '18px 24px',
    marginTop: '14px',
    fontSize: `${theme.fontSizes.small}`,
    lineHeight: 'calc(18 / 14)',
    borderRadius: '200px',
    borderColor: 'transparent',
    minWidth: '199px',
    backgroundColor: `${theme.colors.midnightBlue}`,
    outline: 0,
    cursor: 'text',

    '@media (min-width: 768px)': {
      marginTop: '0px',
      padding: '14px 24px',
      fontSize: `${theme.fontSizes.inputText}`,
      lineHeight: 'calc(26.52 / 17)',
    },
  }),

  menu: baseStyles => ({
    ...baseStyles,
    width: '100%',
    paddingTop: '4px',
  }),

  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxHeight: '200px',
    padding: '18px 24px',
    marginLeft: 'auto',
    overflowX: 'hidden',
    fontSize: `${theme.fontSizes.inputText}`,
    lineHeight: 'calc(26/17)',
    color: `${theme.colors.lightGrayTransparent}`,
    borderRadius: '20px',
    backgroundColor: `${theme.colors.midnightBlue}`,

    '@media (min-width: 768px)': {
      padding: '14px 23px',

      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        margin: '8px 0px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `${theme.colors.steelBlue}`,
        borderRadius: '20px',
      },
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: `${theme.fontSizes.ultraSmall}`,
    textWrap: 'nowrap',
    padding: 0,
    color: state.isSelected ? `${theme.colors.lightGray}` : 'inherit',
    '&:hover': {
      color: `${theme.colors.lightGray}`,
    },

    '@media (min-width: 768px)': {
      fontSize: `${theme.fontSizes.inputText}`,
    },

    '@media (min-width: 1200px)': {
      cursor: 'pointer',
    },
  }),

  placeholder: baseStyles => ({
    ...baseStyles,
    fontSize: `${theme.fontSizes.small}`,
    lineHeight: 'normal',
    width: '100%',
    color: `${theme.colors.lightGray}`,

    '@media (min-width: 768px)': {
      marginTop: '0px',
      fontSize: `${theme.fontSizes.inputText}`,
      lineHeight: 'calc(26.52 / 17)',
    },
  }),

  singleValue: baseStyles => ({
    ...baseStyles,
    width: '100%',
    paddingTop: '2px',
    lineHeight: 'normal',
    color: `${theme.colors.lightGray}`,
  }),

  input: baseStyles => ({
    ...baseStyles,
    paddingTop: '2px',
    lineHeight: 'normal',
    justifyContent: 'start',

    '@media (min-width: 768px)': {
      lineHeight: 'calc(26.52 / 17)',
    },
  }),

  indicatorContainer: baseStyles => ({
    ...baseStyles,
    alignItems: 'flex-end',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
