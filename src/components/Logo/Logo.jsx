import logo from 'img/logo.png';
import { LogoLink, LogoImg, LogoText } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <LogoLink to="/">
        <LogoImg src={logo} alt="logo" />
        <LogoText>Drink Master</LogoText>
      </LogoLink>
    </>
  );
};
