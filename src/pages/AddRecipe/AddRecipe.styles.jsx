// Libs
import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }

  @media (min-width: 1200px) {
    display: flex;
    gap: 60px;
  }
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
