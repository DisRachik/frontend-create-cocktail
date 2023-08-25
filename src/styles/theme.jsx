export const theme = Object.freeze({
  colors: {
    black: '#0A0A11',
    midnightBlue: '#161F37',
    steelBlue: '#434D67',
    lightBlue: '#4070CD',
    mintGreen: '#BCE6D2',
    lightGray: '#f3f3f3',
    grayOpacity: '#f3f3f37f',
    gray: '#F3F3F333',
    errorRed: '#DA1414',
    transparentRed: 'rgba(218, 20, 20, 0.5)',
    successGreen: '#3CBC81',
    transparentGreen: 'rgba(60, 188, 129, 0.5)',
  },

  fontSizes: {
    ultraSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',

    inputText: '17px',

    smallTitle: '24px',
    titlePhone: '28px',
    title: '40px',

    sectionTitlePhone: '36px',
    sectionTitleTablet: '56px',
    sectionTitle: '64px',

    desktop404: '150px',
    phone404: '120px',
  },

  spacing: value => `${4 * value}px`,

  // shadows: {
  //   small: '0 5px 7px -1px rgba(237, 226, 226, 0.50)',
  //   regular: '0px 4px 10px 4px #9e9e9e',
  //   medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  // },

  animation: value => `${value} 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)`,
});
