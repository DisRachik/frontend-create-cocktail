// Libs
import styled from '@emotion/styled';
// Theme
import { theme } from 'styles/theme';

export const DescriptionBox = styled.div`
  margin-bottom: 80px;
`;

export const FileInputBox = styled.div`
  margin-bottom: 40px;
`;

export const CustomFileInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  border-radius: 8px;
  background-color: ${theme.colors.midnightBlueTransparent};
  overflow: hidden;

  &:hover,
  &:focus {
    outline: 1px dashed ${theme.colors.lightGrayTransparent};
  }
`;

export const ImagePreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CustomFileInput = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const CustomFileInputIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.lightGray};
  border-radius: 6px;
  color: black;
`;

export const CustomFileInputText = styled.div`
  font-weight: 500;
  line-height: calc(20 / 16);
`;

export const DefaultFileInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const TextFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputHeading = styled.span`
  position: absolute;
  top: 2px;
  left: 0;
  color: ${theme.colors.lightGray};
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  opacity: 0.5;
`;

export const TextInput = styled.input`
  height: 34px;
  padding-bottom: 14px;
  padding-left: 140px;
  color: inherit;
  font-size: 14px;
  line-height: calc(14 / 14);
  text-align: right;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${theme.colors.lightGrayTransparent};
  outline: 0;

  &:focus {
    opacity: 1;
    border-color: ${theme.colors.lightGray};
    background-color: ${theme.colors.midnightBlueTransparent};
  }
`;

export const selectStyles = {
  control: baseStyles => ({
    ...baseStyles,
    alignItems: 'flex-start',
    minHeight: '34px',
    paddingLeft: '140px',
    fontSize: '14px',
    lineHeight: 'calc(14 / 14)',
    textAlign: 'right',
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
    width: '131px',
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
    textAlign: 'right',
    width: '100%',
  }),

  singleValue: baseStyles => ({
    ...baseStyles,
    width: '100%',
    paddingTop: '2px',
    textAlign: 'right',
    lineHeight: 'normal',
  }),

  input: baseStyles => ({
    ...baseStyles,
    paddingTop: '2px',
    lineHeight: 'normal',
    justifyContent: 'end',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};
