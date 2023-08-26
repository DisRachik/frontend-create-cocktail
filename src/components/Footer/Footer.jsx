import { FollowUs, Logo, Nav, SubscribeForm } from 'components';
import {
  FooterContainer,
  FlexContainer,
  Box,
  Text,
  PolicyText,
  Thumb,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <FlexContainer>
        <Box>
          <div>
            <Logo />
            <FollowUs />
          </div>

          <Nav />
        </Box>

        <SubscribeForm />
      </FlexContainer>

      <Thumb>
        <Text>©2023 Drink Master. All rights reserved.</Text>
        <div>
          <PolicyText to="/">Privacy Policy</PolicyText>
          <PolicyText to="/">Terms of Service</PolicyText>
        </div>
      </Thumb>
    </FooterContainer>
  );
};
