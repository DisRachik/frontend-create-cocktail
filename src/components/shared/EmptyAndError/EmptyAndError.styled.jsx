import styled from '@emotion/styled';
import { theme } from 'styles';

export const Wrapper = styled.div`
  margin-top: ${props => (props.text ? '90px' : '-93px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${props => (props.spinner ? '100hv' : 'auto')};
`;

export const ImgWrap = styled.div`
  position: relative;
  z-index: -1;
`;

export const ErrorScreen = styled.p`
  display: flex;
  position: absolute;
  bottom: 45%;
  left: 50%;
  transform: translate(-48%);
  font-size: ${theme.fontSizes.desktop404};
  font-weight: 600;
  line-height: 0.82;
  color: ${theme.colors.errorOpacity};
  letter-spacing: 5px;

  span {
    display: block;
    margin: 0 20px;
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    line-height: 1.025;
    font-size: ${theme.fontSizes.phone404};
  }
`;

export const Picture = styled.picture`
  display: block;
  height: 476px;
  z-index: -1;

  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

export const Text = styled.p`
  text-align: center;

  font-size: ${theme.fontSizes.small};

  line-height: 1.28;

  width: 205px;

  margin-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.medium};
    line-height: 1.375;

    width: 236px;

    margin-top: 18px;
  }
`;
