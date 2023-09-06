import styled from '@emotion/styled';

export const BasicContainer = styled.div`
  max-width: ${props => props.welcome};
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
`;
