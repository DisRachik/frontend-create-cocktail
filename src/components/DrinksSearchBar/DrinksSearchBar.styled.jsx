import styled from '@emotion/styled';
import Select from 'react-select';

export const Form = styled.form`
  /* background-color: #161f37; */
  min-width: 335px;
`;

export const Input = styled.input`
  min-width: 335px;
  background-color: #161f37;
  border-color: rgba(243, 243, 243, 0.2);
  border-radius: 20px;
  color: #fff;
`;

export const Selector = styled(Select)`
  color: rgba(243, 243, 243, 1);
`;

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#161F37',
    color: '#F3F3F3',
    borderRadius: '20px',
    minWidth: '335px',
    borderColor: '#161f37',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#161F37',
    color: '#F3F3F3',
    borderRadius: '20px',
    minWidth: '335px',
  }),
  // DownChevron: (baseStyles, state) => ({
  //   ...baseStyles,
  //   backgroundColor: 'tomato',
  // }),
};
