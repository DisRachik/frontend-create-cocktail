import styled from '@emotion/styled';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    margin-top: 28px;
    gap: 16px;
  }

  @media (min-width: 1200px) {
    margin-top: 40px;
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
`;

export const FacebookIcon = styled(BiLogoFacebook)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.lightGray};

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const InstagramIcon = FacebookIcon.withComponent(AiFillInstagram);

export const YoutubeIcon = FacebookIcon.withComponent(AiFillYoutube);
