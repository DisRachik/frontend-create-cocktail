import styled from '@emotion/styled';

export const BasicContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${props => props.welcome};
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;
