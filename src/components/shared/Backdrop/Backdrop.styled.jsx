import styled from '@emotion/styled';
import { theme } from 'styles';

export const BackdropStyled = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: visible;
  opacity: 1;
  pointer-events: auto;

  transition: ${theme.animation('visibility')};
  transition: ${theme.animation('opacity')};
`;
