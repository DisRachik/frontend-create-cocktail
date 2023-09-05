export const theme = Object.freeze({
  colors: {
    black: '#0A0A11',
    blackTransparent: 'rgba(10, 10, 17, 0.50)',
    midnightBlue: '#161F37',
    midnightBlueTransparent: 'rgba(22, 31, 55, 0.2)',
    steelBlue: '#434D67',
    lightBlue: '#4070CD',
    mintGreen: '#BCE6D2',
    lightGray: '#f3f3f3',
    lightGrayTransparent: 'rgba(243, 243, 243, 0.50)',
    transparentLight: 'rgba(243, 243, 243, 0.20)',
    errorOpacity: '#f3f3f31a',
    grayOpacity: '#f3f3f37e',
    gray: '#F3F3F333',
    errorRed: '#DA1414',
    transparentRed: '#da14147f',
    successGreen: '#3CBC81',
    transparentGreen: '#3cbc817f',
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

    sectionTitlePhone: '32px',
    sectionTitleTablet: '56px',
    sectionTitle: '64px',

    desktop404: '150px',
    phone404: '120px',
  },

  spacing: value => `${4 * value}px`,

  shadows: {
    regular: '0px 4px 10px 4px #9e9e9e',
    light: '2px 2px 25px rgba(255, 255, 255, 0.99)',
  },

  animation: value => {
    const animationValue = value.split(',').map(property => {
      return `${property.trim()} 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)`;
    });
    return animationValue.join(', ');
  },
});
