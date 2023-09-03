// Libs
import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: 94px;
  }
`;

export const Aside = styled.div`
  max-width: 313px;
`;

export const FollowUsWrapper = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
