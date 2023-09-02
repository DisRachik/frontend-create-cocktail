import styled from '@emotion/styled';
import Select from 'react-select';
import { theme } from 'styles';

export const Form = styled.form`
  margin-top: 40px;
  min-width: 335px;
  @media (min-width: 768px) {
    display: flex;
    max-width: 678px;
  }
`;

export const Input = styled.input`
  /* min-width: 335px; */
  /* @media (min-width: 768px) { */
  min-width: 199px;
  /* } */
  background-color: ${theme.colors.midnightBlue};
  border: 1px solid ${theme.colors.transparentLight};
  border-radius: 20px;
  color: ${theme.colors.lightGray};
`;

export const Selector = styled(Select)`
  color: ${theme.colors.lightGrayTransparent};
  /* max-width: 335px; */
  /* @media (min-width: 768px) { */
  min-width: 199px;
  /* } */
`;

// export const selectStyles = {
//   control: (baseStyles, state) => ({
//     ...baseStyles,
//     backgroundColor: '#161F37',
//     color: '#F3F3F3',
//     borderRadius: '20px',
//     minWidth: '199px',

//     borderColor: '#161f37',
//   }),
//   menuList: (baseStyles, state) => ({
//     ...baseStyles,
//     backgroundColor: '#161F37',
//     color: '#F3F3F3',
//     borderRadius: '20px',
//     minWidth: '199px',
//   }),
//   // DownChevron: (baseStyles, state) => ({
//   //   ...baseStyles,
//   //   backgroundColor: 'tomato',
//   // }),
// };

export const selectStyles = {
  control: baseStyles => ({
    ...baseStyles,
    alignItems: 'flex-start',
    minHeight: '34px',
    paddingLeft: '40px',
    fontSize: '14px',
    lineHeight: 'calc(14 / 14)',
    // textAlign: 'right',
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${theme.colors.lightGrayTransparent}`,
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
    gap: '6px',
    width: '199px',
    height: '129px',
    padding: '10px',
    marginLeft: 'auto',
    marginTop: '-6px',
    overflowX: 'hidden',
    color: `${theme.colors.lightGrayTransparent}`,
    borderRadius: '12px',
    backgroundColor: `${theme.colors.midnightBlue}`,
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '12px',
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
  }),

  valueContainer: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexWrap: 'nowrap',
  }),

  placeholder: baseStyles => ({
    ...baseStyles,
    paddingTop: '2px',
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
    // justifyContent: 'end',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
