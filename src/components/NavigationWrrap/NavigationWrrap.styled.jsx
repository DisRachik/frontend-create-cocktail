import styled from '@emotion/styled';
import { theme } from 'styles';

// function disableScroll() {
//   document.body.classList.add('disable-scroll ');
// }
// function enableScroll() {
//   document.body.classList.remove('disable-scroll ');
// }

export const NavigationWrrapStyled = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 85px;
  width: 100%;
  height: 100%;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.black};

  transition: ${theme.animation('visibility')};
  transition: ${theme.animation('opacity')};

  /* function disableScroll() {
  document.body.classList.add('disable-scroll ');

} */
  /* body {
    height: 100vh;
    overflow-y: hidden;
  } */
  body {
    height: 100vh;
    overflow: hidden;
  }
`;
