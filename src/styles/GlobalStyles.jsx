// Libs
import { css } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
// Theme
import { theme } from './theme';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Manrope Regular'),
      url('./fonts/Manrope-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Manrope Medium'),
      url('./fonts/Manrope-Medium.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Manrope SemiBold'),
      url('./fonts/Manrope-SemiBold.ttf') format('ttf');
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    ${'' /* min-height: 100vh; */}
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: ${theme.fontSizes.medium};
    font-style: normal;
    color: ${theme.colors.lightGray};
    background-color: ${theme.colors.black};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
