import styled from '@emotion/styled';

export const ContainerWrap = styled.div`
  outline: 1px solid tomato;

  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }
`;
