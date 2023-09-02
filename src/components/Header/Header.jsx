import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Logo, Navigation, UserLogo } from 'components';
import { BurgerMenu, FlexWrapper, UserBox } from './Header.styled';
import { useEffect, useState } from 'react';

import { BurgerMenuNavigation } from 'components/BurgerMenuNavigation/BurgerMenuNavigation';

export const Header = () => {
  const [nav, setNav] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      setNav(false);
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => {
      setNav(false);
    };

    const closeWrrap = () => {
      if (windowWidth > 1200) {
        return closeMenu();
      }
    };

    window.addEventListener('resize', closeWrrap);
    return () => {
      window.removeEventListener('resize', closeWrrap);
    };
  }, [windowWidth]);

  const toggleNavigate = () => {
    setNav(prevState => !prevState);
  };

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <header>
      <Container>
        <FlexWrapper>
          <Logo />
          {windowWidth > 1200 && <Navigation />}
          <UserBox>
            <UserLogo />
            <BurgerMenu onClick={toggleNavigate}>
              {nav ? (
                <AiOutlineClose size={28} />
              ) : (
                <FiAlignJustify size={28} />
              )}
            </BurgerMenu>
          </UserBox>
        </FlexWrapper>
        {nav && windowWidth < 1200 && (
          <BurgerMenuNavigation closeMenu={closeMenu} />
        )}
      </Container>
    </header>
  );
};
