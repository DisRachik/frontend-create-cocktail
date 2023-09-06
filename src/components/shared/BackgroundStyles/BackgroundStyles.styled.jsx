import styled from '@emotion/styled';

export const TopMain = styled.div`
  z-index: 1;
  pointer-events: none;
  position: absolute;
  width: 257px;
  height: 247px;

  border-radius: 257px;

  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  top: 84px;
  left: 42px;

  @media (min-width: 768px) {
    width: 387px;
    height: 372.442px;

    border-radius: 387px;

    top: 115px;
    left: 40px;
  }

  @media (min-width: 1200px) {
    top: 120px;
    left: -25px;
  }
`;

export const LeftMain = styled.div`
  z-index: 1;
  pointer-events: none;
  position: absolute;
  width: 520px;
  height: 550px;

  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  top: 20px;
  left: -400px;

  @media (min-width: 768px) {
    width: 784px;
    height: 829.931px;

    border-radius: 829.931px;

    top: -20px;
    left: -620px;
  }

  @media (min-width: 1200px) {
    top: 20px;
    left: -690px;
  }
`;

export const RightMain = styled.div`
  z-index: 1;
  pointer-events: none;
  position: absolute;

  @media (min-width: 768px) {
    width: 549px;
    height: 543px;

    border-radius: 549px;

    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);

    right: -430px;
    top: 500px;
  }

  @media (min-width: 1200px) {
    top: 460px;
    right: -290px;
  }
`;

export const RightMainSecond = styled.div`
  z-index: 1;
  pointer-events: none;
  position: absolute;

  @media (min-width: 1200px) {
    width: 430px;
    height: 465px;
    flex-shrink: 0;

    border-radius: 465px;
    background: rgba(188, 230, 210, 0.4);
    filter: blur(104.8543701171875px);

    top: 745px;
    right: -260px;
  }
`;

export const FooterRight = styled.div`
  z-index: 1;
  pointer-events: none;
  position: absolute;
  width: 774px;
  height: 762px;

  bottom: -600px;
  right: -637px;
  border-radius: 774px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);

  @media (min-width: 768px) {
    bottom: -660px;
    right: -245px;
  }

  @media (min-width: 1200px) {
    width: 784px;
    height: 849px;

    border-radius: 849px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);

    bottom: -740px;
    right: -150px;
  }
`;

export const FooterCentre = styled.div`
  z-index: 1;
  pointer-events: none;
  position: absolute;

  @media (min-width: 1200px) {
    width: 774px;
    height: 762px;

    border-radius: 774px;
    background: rgba(188, 230, 210, 0.4);
    filter: blur(104.8543701171875px);

    bottom: -690px;
    left: 235px;
  }
`;

export const FooterLeft = styled.div`
  z-index: 1;
  pointer-events: none;
  position: absolute;
  width: 784px;
  height: 849px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  bottom: -105px;
  left: -690px;

  @media (min-width: 768px) {
    bottom: -165px;
    left: -690px;
  }

  @media (min-width: 1200px) {
    bottom: -270px;
    left: -685px;
  }
`;
