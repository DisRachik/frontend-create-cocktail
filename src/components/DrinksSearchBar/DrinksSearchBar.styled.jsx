import styled from '@emotion/styled';
import Select from 'react-select';
import { theme } from 'styles';
import { LuSearch } from 'react-icons/lu';

export const Form = styled.form`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  min-width: 335px;
  @media (min-width: 768px) {
    display: flex;
    max-width: 678px;
  }
`;

export const Input = styled.input`
  font-size: ${theme.fontSizes.small};
  line-height: calc(18 / 14);
  min-width: 335px;
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  @media (min-width: 768px) {
    min-width: 199px;
  }
  background-color: ${theme.colors.midnightBlue};
  border: 1px solid ${theme.colors.transparentLight};
  border-radius: 200px;
  color: ${theme.colors.lightGray};
`;

export const SearchBtn = styled(LuSearch)`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;
`;

export const Selector = styled(Select)`
  color: ${theme.colors.lightGrayTransparent};
  /* max-width: 335px; */
  /* @media (min-width: 768px) { */
  min-width: 199px;

  /* } */
`;

export const selectStyles = {
  control: baseStyles => ({
    ...baseStyles,
    // alignItems: 'flex-start',
    minHeight: '18px',
    paddingLeft: '24px',
    paddingTop: '18px',
    paddingBottom: '18px',
    marginTop: '14px',
    fontSize: '14px',
    lineHeight: 'calc(18 / 14)',
    borderRadius: '200px',
    borderColor: 'transparent',
    minWidth: '199px',
    backgroundColor: `${theme.colors.midnightBlue}`,
    outline: 0,
    cursor: 'text',
  }),

  menu: baseStyles => ({
    ...baseStyles,
    width: '100%',
  }),

  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    minwidth: '200px',
    maxWidth: '335px',
    maxHeight: '200px',
    padding: '18px 24px',
    marginLeft: 'auto',
    marginTop: '-6px',
    overflowX: 'hidden',
    fontSize: `${theme.fontSizes.inputText}`,
    fontHeight: 'calc(26/17)',
    color: `${theme.colors.lightGrayTransparent}`,
    borderRadius: '20px',
    backgroundColor: `${theme.colors.midnightBlue}`,
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    // fontSize: '12px',
    textWrap: 'nowrap',
    padding: 0,
    color: state.isSelected ? `${theme.colors.lightGray}` : 'inherit',
    '&:hover': {
      color: `${theme.colors.lightGray}`,
    },
  }),

  indicatorsContainer: baseStyles => ({
    ...baseStyles,
    height: '100%',
    paddingRight: '18px',
  }),

  // valueContainer: baseStyles => ({
  //   ...baseStyles,
  //   display: 'flex',
  //   flexWrap: 'nowrap',
  // }),

  placeholder: baseStyles => ({
    ...baseStyles,
    fontSize: `${theme.fontSizes.inputText}`,
    // paddingTop: '2px',
    lineHeight: 'normal',
    // textAlign: 'right',
    width: '100%',
  }),

  singleValue: baseStyles => ({
    ...baseStyles,
    width: '100%',
    paddingTop: '2px',
    // textAlign: 'right',
    lineHeight: 'normal',
    color: `${theme.colors.lightGray}`,
  }),

  input: baseStyles => ({
    ...baseStyles,
    paddingTop: '2px',
    lineHeight: 'normal',
    justifyContent: 'start',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
