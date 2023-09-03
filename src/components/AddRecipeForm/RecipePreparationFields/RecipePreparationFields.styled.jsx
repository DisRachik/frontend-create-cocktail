// Libs
import styled from '@emotion/styled';
// Theme
import { theme } from 'styles';

export const RecipeTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
`;

export const TextareaBox = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 184px;
  padding: 16px;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${theme.colors.lightGrayTransparent};
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${theme.colors.lightGrayTransparent};
  opacity: 0.8;
  outline: 0;
  resize: none;

  &:focus {
    border: 1px solid ${theme.colors.lightGray};
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: calc(26 / 17);
  }

  // ============== scrollbar ==============

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${theme.colors.lightGrayTransparent};
    border: 8px solid ${theme.colors.black};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.lightGray};
  }
`;
