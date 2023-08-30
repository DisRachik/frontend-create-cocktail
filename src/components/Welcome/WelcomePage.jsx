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
} from './WelcomePage.styled';

export const WelcomePage = () => {
  const { navigation } = useAuth();

  return (
    <ContainerWelcome>
      <BackgroundImage>
        <SectionWelcome>
          <WelcomeWrap>
            <WelcomeTitle>Welcome to the app!</WelcomeTitle>
            <Text>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </Text>
            <List>
              <li>
                <Button minWidth="183px" onClick={() => navigation('/signup')}>
                  Registration
                </Button>
              </li>
              <li>
                <Button
                  transparent
                  minWidth="140px"
                  onClick={() => navigation('/signin')}
                >
                  Sign In
                </Button>
              </li>
            </List>
          </WelcomeWrap>
        </SectionWelcome>
      </BackgroundImage>
    </ContainerWelcome>
  );
};
