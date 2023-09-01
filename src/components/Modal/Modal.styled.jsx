import styled from '@emotion/styled';
// import theme from '../../styles/theme';

export const ModalWrrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.transparentLight};

  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;

  /* transform: ${({ modal }) => {
    return modal ? 'scale(1)' : 'scale(0)';
  }}; */
  opacity: ${({ modal }) => {
    return modal ? '1' : '0';
  }};
  pointer-events: ${({ modal }) => {
    return modal ? 'all' : 'none';
  }};

  /* transition: transform 1s; */
  transition: opacity 0.5s;
`;

export const Content = styled.div`
  padding: 20px;

  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: black;
`;
