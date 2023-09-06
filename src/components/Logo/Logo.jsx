import logo from 'img/logo.svg';
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
