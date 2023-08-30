import { Button } from 'components';
import { useAuth } from 'redux/auth/useAuth';
import {
  BackgroundImage,
  ContainerWelcome,
  List,
  SectionWelcome,
  Text,
  WelcomeTitle,
  WelcomeWrap,
  Wrapper,
} from './WelcomePage.styled';

export const WelcomePage = () => {
  const { navigation } = useAuth();

  return (
    <BackgroundImage>
      <Wrapper>
        <ContainerWelcome>
          <SectionWelcome>
            <WelcomeWrap>
              <WelcomeTitle>Welcome to the app!</WelcomeTitle>
              <Text>
                This app offers more than just a collection of recipes - it is
                designed to be your very own digital cookbook. You can easily
                save and retrieve your own recipes at any time.
              </Text>
              <List>
                <li>
                  <Button
                    minWidth="164px"
                    minHeight="46px"
                    onClick={() => navigation('/signup')}
                  >
                    Registration
                  </Button>
                </li>
                <li>
                  <Button
                    transparent
                    minWidth="141px"
                    minHeight="46px"
                    onClick={() => navigation('/signin')}
                  >
                    Sign In
                  </Button>
                </li>
              </List>
            </WelcomeWrap>
          </SectionWelcome>
        </ContainerWelcome>
      </Wrapper>
    </BackgroundImage>
  );
};
