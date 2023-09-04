import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Container, Logo, Navigation, UserLogo } from 'components';
import { BurgerMenu, FlexWrapper, UserBox } from './Header.styled';
import { useEffect, useState } from 'react';

import { BurgerMenuNavigation } from 'components/BurgerMenuNavigation/BurgerMenuNavigation';

// import { MotivationModal } from 'components/MotivationModal/MotivationModal';

export const Header = () => {
  const [nav, setNav] = useState(false);
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
          {nav && windowWidth < 1200 && (
            <BurgerMenuNavigation closeMenu={closeMenu} />
          )}
        </FlexWrapper>
      </Container>
    </header>
  );
};
