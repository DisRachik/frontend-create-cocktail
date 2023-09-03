// Libs
import styled from '@emotion/styled';
// Theme
import { theme } from 'styles/theme';

export const DescriptionBox = styled.div`
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }

  @media screen and (min-width: 1200px) {
    gap: 40px;
  }
`;

export const FileInputBox = styled.div`
  height: auto;
  aspect-ratio: 1 / 1;
  width: auto;

  @media screen and (max-width: 767.98px) {
    max-width: 400px;
    max-height: 400px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CustomFileInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-color: ${theme.colors.midnightBlueTransparent};
  overflow: hidden;
  border: 1px solid ${theme.colors.black};

  &:hover,
  &:focus {
    border: 1px dashed ${theme.colors.lightGrayTransparent};
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

export const Label = styled.label`
  width: 100%;
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
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

  @media screen and (min-width: 768px) {
    height: 41px;
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

    '@media screen and (min-width: 768px)': {
      height: '41px',
      fontSize: '16px',
    },
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
    width: '160px',
    height: '145px',
    padding: '10px',
    marginLeft: 'auto',
    marginTop: '-6px',
    overflowX: 'hidden',
    color: `${theme.colors.lightGrayTransparent}`,
    borderRadius: '12px',
    backgroundColor: `${theme.colors.midnightBlue}`,

    '@media screen and (min-width: 768px)': {
      width: '190px',
      height: '169px',
      gap: '8px',
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '12px',
    lineHeight: 'calc(16 / 12)',
    textWrap: 'nowrap',
    padding: 0,
    color: state.isSelected ? `${theme.colors.lightGray}` : 'inherit',

    '&:hover': {
      color: `${theme.colors.lightGray}`,
    },

    '@media screen and (min-width: 768px)': {
      fontSize: '14px',
      lineHeight: 'calc(18 / 14)',
    },
  }),

  indicatorsContainer: baseStyles => ({
    ...baseStyles,
    height: '100%',
    alignItems: 'flex-start',
    paddingTop: '2px',
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
    textWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
