// Libs
import styled from '@emotion/styled';
// Icons
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
// Theme
import { theme } from 'styles';

export const List = styled.ul`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 10px;
`;

export const Link = styled.a`
  width: 22px;
  height: 22px;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export const FacebookIcon = styled(BiLogoFacebook)`
  width: 22px;
  height: 22px;
  color: ${theme.colors.lightGray};

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const InstagramIcon = FacebookIcon.withComponent(AiFillInstagram);

export const YoutubeIcon = FacebookIcon.withComponent(AiFillYoutube);
