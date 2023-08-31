import styled from '@emotion/styled';

export const ContainerWrap = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 100px;
  }
`;
