import styled from '@emotion/styled';
import Select from 'react-select';

export const Form = styled.form`
  /* background-color: #161f37; */
  margin-top: 40px;
  min-width: 335px;
  @media (min-width: 768px) {
    display: flex;
    max-width: 678px;
  }
`;

export const Input = styled.input`
  min-width: 335px;
  @media (min-width: 768px) {
    min-width: 199px;
  }
  background-color: #161f37;
  border-color: rgba(243, 243, 243, 0.2);
  border-radius: 20px;
  color: #fff;
`;

export const Selector = styled(Select)`
  color: rgba(243, 243, 243, 1);
  max-width: 335px;
  @media (min-width: 768px) {
    min-width: 199px;
  }
`;

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#161F37',
    color: '#F3F3F3',
    borderRadius: '20px',
    minWidth: '199px',

    borderColor: '#161f37',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#161F37',
    color: '#F3F3F3',
    borderRadius: '20px',
    minWidth: '199px',
  }),
  // DownChevron: (baseStyles, state) => ({
  //   ...baseStyles,
  //   backgroundColor: 'tomato',
  // }),
};
