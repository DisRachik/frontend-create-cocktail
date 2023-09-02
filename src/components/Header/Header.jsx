import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Logo, Navigation, UserLogo } from 'components';
import {
  BurgerMenu,
  HeaderContainer,
  HeaderWrrap,
  UserBox,
} from './Header.styled';
import { useState } from 'react';
import { NavigationWrrap } from 'components/NavigationWrrap/NavigationWrrap';

export const Header = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);
  const toggleNavigate = () => {
    setNav(prevState => !prevState);
  };

  const closeMenu = () => {
    setNav(false);
  };
  return (
    <HeaderContainer>
      <Container>
        <HeaderWrrap>
          <Logo />
          <Navigation />
          <UserBox>
            <UserLogo />
            <BurgerMenu onClick={toggleNavigate}>
              {nav ? (
                <AiOutlineClose size={28} />
              ) : (
                <FiAlignJustify size={28} />
              )}
              {nav && (
                <NavigationWrrap>
                  <Navigation closeMenu={closeMenu} />
                </NavigationWrrap>
              )}
            </BurgerMenu>
          </UserBox>
        </HeaderWrrap>
      </Container>
    </HeaderContainer>
  );
};
