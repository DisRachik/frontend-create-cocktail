import { Container, FollowUs, Logo, Nav, SubscribeForm } from 'components';
import {
  FooterContainer,
  FlexContainer,
  Box,
  Wrap,
  Text,
  PolicyText,
  Thumb,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FlexContainer>
          <Box>
            <Wrap>
              <Logo />
              <FollowUs />
            </Wrap>

            <Nav />
          </Box>

          <SubscribeForm />
        </FlexContainer>

        <Thumb>
          <Text>©2023 Drink Master. All rights reserved.</Text>
          <div>
            <PolicyText to="/privacy-policy">Privacy Policy</PolicyText>
            <PolicyText to="/terms-of-service">Terms of Service</PolicyText>
          </div>
        </Thumb>
      </Container>
    </FooterContainer>
  );
};
